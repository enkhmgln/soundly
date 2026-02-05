# Soundly v1 MVP

## Goal
Music-first dating & social app where matching is driven by shared taste.

## MVP Features
- Spotify login
- Music-based onboarding (top artists, genres, recent tracks)
- Swipe matching with vibe score
- Profile with music identity
- Chat with music sharing
- Preference filter (dating/friends/bandmates)

## Non-goals (v1)
- Radio rooms
- Creator tools
- Premium tiers
- YouTube/SoundCloud login

## v1 API (first pass)
- POST /auth/spotify
- GET /me
- GET /feed
- POST /swipes
- POST /matches
- GET /chats
- POST /chats/:id/messages
