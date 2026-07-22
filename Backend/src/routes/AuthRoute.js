import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import configurePassport from '../config/Passport.js';

const authRoute = express.Router();

configurePassport();

const strategyExists = (name) => !!passport._strategy(name);

// Initiate Google OAuth
authRoute.get('/google', (req, res, next) => {
  if (!strategyExists('google')) {
    return res.status(500).json({ success: false, message: 'Google OAuth is not configured' });
  }
  return passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
});

// Google callback
authRoute.get(
  '/google/callback',
  (req, res, next) => {
    if (!strategyExists('google')) {
      return res.status(500).json({ success: false, message: 'Google OAuth is not configured' });
    }
    return passport.authenticate('google', { failureRedirect: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/login`, session: false })(req, res, next);
  },
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    const redirectUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/oauth-redirect?token=${token}`;
    res.redirect(redirectUrl);
  }
);

// Initiate LinkedIn OAuth
authRoute.get('/linkedin', (req, res, next) => {
  if (!strategyExists('linkedin')) {
    return res.status(500).json({ success: false, message: 'LinkedIn OAuth is not configured' });
  }
  return passport.authenticate('linkedin')(req, res, next);
});

// LinkedIn callback
authRoute.get(
  '/linkedin/callback',
  (req, res, next) => {
    if (!strategyExists('linkedin')) {
      return res.status(500).json({ success: false, message: 'LinkedIn OAuth is not configured' });
    }
    return passport.authenticate('linkedin', { failureRedirect: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/login`, session: false })(req, res, next);
  },
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    const redirectUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/oauth-redirect?token=${token}`;
    res.redirect(redirectUrl);
  }
);

export default authRoute;
