import passport from 'passport';
import jwt from 'jsonwebtoken';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import { pool } from "../models/db";
import { User } from '../types';
// import db from '../models/db';
passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        callbackURL: '/api/google/oauth',
      },
      async (accessToken, refreshToken, profile: Profile, done) => {
        const email = profile.emails?.[0].value || '';
     
        try {
       
          const userQuery = await pool.query('SELECT * FROM "userTable2" WHERE email = $1', [email]);
          let user:User;
          if (userQuery.rows.length === 0) {
         
            const newUser = await pool.query(
              'INSERT INTO "userTable2" (cognito_id, email) VALUES ($1, $2) RETURNING *',
              [email, email]
            );
            user = newUser.rows[0];
          } else {
            user = userQuery.rows[0];
          }
  
       
          const token = jwt.sign({ user_id: user.cognito_id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1h' });
          return done(null, { user, token });
        } catch (err) {
          return done(err, null!);
        }
      }
    )
  );
  export default passport;



