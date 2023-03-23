import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: 'Role',
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

userSchema.pre("save", async function (next) {
    // Si ya esta hasheado no volver a hashear
    if (!this.isModified("password")) {
        next();
    }
    const hashedPassword = await bcrypt.hash(this.password, 10); 
    this.password = hashedPassword;
});

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

const User = model('User', userSchema);
export default User;
