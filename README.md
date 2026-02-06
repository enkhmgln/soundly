# Soundly

Soundly is a music-first social and dating app where your music taste defines who you connect with. Think Tinder meets Spotify, with layers for musicians, music lovers, and creators to vibe, match, and build community.

## Core idea
"Connect through sound. Find people who feel your playlist."

Whether you're looking for a date, a bandmate, or a friend to jam with, Soundly uses your music preferences to match you. It is not just swiping; it is vibing.

## Key features (MVP stage)

### Music-based onboarding
- Users sign up with Spotify (more providers planned).
- Music preferences (top artists, genres, recent tracks) are pulled to build your audio identity.

### Matching system
- Swipe-based UI (like Tinder).
- Matches focus on music overlap, such as:
  - Shared artists and genres
  - What you're currently listening to
  - A vibe score (match percentage)

### Preferences filter
- What are you here for?
  - Dating
  - Friendship
  - Band members / collaboration
- You can switch this anytime to discover new types of connections.

### Chat and music sharing
- Built-in chat to connect instantly.
- Drop songs, playlists, and talk about music in real time.

### Profile system
- Basic info plus a music profile.
- Shows:
  - Top artists
  - Current track

### Payments
- Users can subscribe to premium tiers using Stripe (global) or QPay (Mongolia).

## Coming soon / future features

### Radio rooms (community audio spaces)
- Join or host a live listening room where people can tune into what you're playing.
- Think Clubhouse plus Spotify Sessions.
- Great for artists to perform or creators to connect with fans.

### YouTube Music / SoundCloud login
- Expand login options and let users import music taste from different platforms.

### Premium tiers (for creators and musicians)
- Verified artist profiles.
- Upload unreleased songs or snippets.
- Track engagement (like a mini fanbase builder).
- Advanced analytics (who is vibing with your tracks).

### Emotion and behavior hooks
Mood status (set manually or auto from music tempo)
- Track your emotional vibe (happy, sad, chill) based on what you listen to.
- Matches are suggested based on emotional alignment for deeper connection.

### Creator tools
- Custom profile themes.
- Link to your music platforms (Spotify, Apple Music, SoundCloud).
- Paywalled content or support button for fans.

## Tech stack
- Mobile: Expo (React Native) + Expo Router + NativeWind
- Backend: Bun + Hono
- API: tRPC + REST
- Database: PostgreSQL + Drizzle ORM
- Auth: Spotify (JWT planned)
- Payments: Stripe + QPay
- Matching: Based on music overlap and vibe score

## Vision
Soundly is not just a dating app. It is:
- A music-social platform for the next generation.
- A tool for music discovery through people.
- A way for musicians to grow, creators to engage, and listeners to connect on something that actually matters: taste.
