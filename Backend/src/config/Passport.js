import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import bcrypt from 'bcryptjs';
import { User } from '../models/userModel.js';

export default function configurePassport() {
  const backendBaseUrl = process.env.BACKEND_URL || 'http://localhost:8080';

  // Google
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (googleClientId && googleClientSecret) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: googleClientId,
          clientSecret: googleClientSecret,
          callbackURL: process.env.GOOGLE_CALLBACK_URL || `${backendBaseUrl}/auth/google/callback`,
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            const email = profile.emails && profile.emails[0] && profile.emails[0].value;
            const username = profile.displayName || (profile.name && `${profile.name.givenName} ${profile.name.familyName}`) || email;

            if (!email) return done(new Error('No email from Google'));

            let user = await User.findOne({ email });
            if (!user) {
              const tempPassword = Math.random().toString(36).slice(2);
              const hash = await bcrypt.hash(tempPassword, 10);
              user = await User.create({ username, email, password: hash, isVerified: true });
            }
            return done(null, user);
          } catch (err) {
            return done(err);
          }
        }
      )
    );
  } else {
    console.warn('Google OAuth is not configured: set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your environment.');
  }

  // LinkedIn
  const linkedinClientId = process.env.LINKEDIN_CLIENT_ID;
  const linkedinClientSecret = process.env.LINKEDIN_CLIENT_SECRET;
  if (linkedinClientId && linkedinClientSecret) {
    passport.use(
      new LinkedInStrategy(
        {
          clientID: linkedinClientId,
          clientSecret: linkedinClientSecret,
          callbackURL: process.env.LINKEDIN_CALLBACK_URL || `${backendBaseUrl}/auth/linkedin/callback`,
          scope: ['r_emailaddress', 'r_liteprofile'],
          state: true,
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            const email = profile.emails && profile.emails[0] && profile.emails[0].value;
            const username = profile.displayName || (profile.name && `${profile.name.givenName} ${profile.name.familyName}`) || email;

            if (!email) return done(new Error('No email from LinkedIn'));

            let user = await User.findOne({ email });
            if (!user) {
              const tempPassword = Math.random().toString(36).slice(2);
              const hash = await bcrypt.hash(tempPassword, 10);
              user = await User.create({ username, email, password: hash, isVerified: true });
            }
            return done(null, user);
          } catch (err) {
            return done(err);
          }
        }
      )
    );
  } else {
    console.warn('LinkedIn OAuth is not configured: set LINKEDIN_CLIENT_ID and LINKEDIN_CLIENT_SECRET in your environment.');
  }

  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
}
