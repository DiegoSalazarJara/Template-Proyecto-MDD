'use strict';

import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    try {

        const {username, email, password} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const userCreated = new User({
            username,
            email,
            password: hashedPassword
        });

        const userSaved = await userCreated.save();

        res.status(201).json(userSaved);

    } catch (error) {
        res.status(400).json({message: 'Error al registrar el usuario'});
        console.error('Error de registro: ', error);
    }
};

export const login = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado!' });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if(!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta!' });

        res.status(200).json({ message: 'Usuario logueado!', user});
    }
    catch (error) {
        res.status(400).json({ message: 'Error al iniciar sesión'});
        console.error('Error de inicio de sesión: ', error);
    }
};

export const logout = (req, res) => {
    res.status(200).json({ message: 'Sesión cerrada correctamente' });
};