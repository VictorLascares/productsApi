import generateJWT from "../libs/generateJwt";
import User from "../models/User";
import Role from "../models/Role";

const register = async (req, res) => {
    const { username, email, roles } = req.body;

    // Prevent duplicate users
    const foundedUser = await Promise.all([
        User.findOne({ username }),
        User.findOne({ email })
    ]);

    if (foundedUser[0] || foundedUser[1]) {
        return res.status(400).json({ msg: 'Usuario ya registrado'})
    }

    const newUser = new User(req.body);

    if (roles) {
        const foundedRoles = await Role.find({ name: {$in: roles}});
        newUser.roles = foundedRoles.map(role => role._id);
    } else {
        const role = await Role.find({ name: 'user' });
        newUser.roles = [role._id];
    }

    try {
        const savedUser = await newUser.save();

        const token = generateJWT({ id: savedUser._id });

        res.json({ token })
    } catch (error) {
        res.json({ msg: error.message });
    }
}

const logIn = async (req, res) => {
    res.json({ msg: 'Iniciando Sesion' });
}

export {
    register,
    logIn
}