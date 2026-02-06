# Soundly — System Design, Architecture & v1 Scope

## 1. What This App Actually Does

Soundly is a **music-based social matching app**.

It is not just a dating app.
It filters people by **music taste first**, then enables:

- Dating
- Friendship
- Band member discovery

Music is the identity layer. Matching is the outcome.

---

## 2. Core Value Proposition (Business View)

Problem:

- Dating apps are shallow (looks-first)
- Musicians & music lovers struggle to find aligned people

Solution:

- Use music taste as a **signal for values & personality**
- Match users based on shared artists, genres, and listening behavior

Why it works:

- Music taste is emotionally strong
- It creates instant conversation hooks
- It increases match quality, not just quantity

---

## 3. User Types

### 3.1 Primary Users

- Music lovers
- Casual listeners
- Musicians / creators

### 3.2 User Intent (Preference)

Each user selects one:

- Dating
- Friendship
- Band members

This affects matching logic and UI.

---

## 4. User Process (End-to-End Journey)

### 4.1 Onboarding Flow

1. Open app
2. Login / Sign up
   - Spotify / YouTube Music (v1: Spotify only is enough)

3. Grant music access
4. Select intent (Dating / Friends / Band)
5. Pick favorite artists / genres (pre-filled from API)
6. Complete profile

User is now active.

---

### 4.2 Main App Flow

1. User lands on Home (Swipe / Discover)
2. Sees profiles with:
   - Photos
   - Top artists
   - Match % (music similarity)

3. Swipes (Like / Pass)
4. Match happens if mutual like
5. Chat unlocks

---

### 4.3 Engagement Loop

- Daily new profiles
- Music-based prompts ("You both love Arctic Monkeys")
- Profile updates based on recent listening

This loop drives retention.

---

## 5. Screens You Need (v1 Mobile)

### Auth & Onboarding

- Splash
- Login / Signup
- Music provider connect
- Intent selection
- Profile setup

### Core Screens

- Home (Swipe / Discover)
- Match list
- Chat
- Profile (self)
- Profile (other user)

### Utility

- Settings
- Subscription / Paywall

---

## 6. v1 Feature Scope (What to Implement)

### Must-Have (v1)

- Auth (Spotify OAuth)
- Profile creation
- Music taste ingestion
- Music-based matching algorithm
- Swipe logic
- Match creation
- Chat (text only)
- Basic subscription

### Nice-to-Have (If Time)

- Match % indicator
- Profile badges (Top Artist)

### Explicitly NOT in v1

- Radio rooms
- Voice / video calls
- Creator tools
- Advanced moderation

---

## 7. Business Logic (Important)

### Matching Logic

Signals:

- Shared artists
- Genre overlap
- Intent compatibility

Output:

- Ranked user list

---

### Monetization (v1)

- Premium tier:
  - Unlimited swipes
  - See who liked you
  - Higher visibility

No ads in v1.

---

## 8. System Architecture (High-Level)

### Client (Mobile App)

- Expo (React Native)
- Expo Router for navigation
- NativeWind for styling

### Backend

- Auth service
- Matching service
- Chat service
- Payment service

### External Services

- Spotify API
- Stripe / QPay

---

## 9. Deployment & Ops (v1 Level)

- Single backend service is fine
- Simple PostgreSQL
- Push notifications
- Basic logging

Do NOT over-engineer.

---

## 10. What v1 Success Looks Like

- Users complete onboarding
- Matches happen
- Chats start
- People come back daily

Everything else is noise.

---

## 11. Summary

Soundly v1 is about:

- Clear positioning
- Strong onboarding
- Simple but meaningful matching

If users feel: "this app gets my music taste" — v1 is a win.
