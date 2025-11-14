# TODO: Connect Frontend, Backend, and Database Strongly

## Backend Fixes
- [x] Add login function to wellness-wave-backend/src/controllers/auth.controller.ts
- [x] Add login route to wellness-wave-backend/src/routes/authRoutes.ts
- [x] Remove redundant route mounting in wellness-wave-backend/src/server.ts
- [x] Update wellness-wave-backend/src/controllers/ai.controller.ts to use consistent Gemini API library and key

## Frontend Fixes
- [x] Refactor context/AuthContext.tsx to use authService for real backend auth
- [x] Refactor context/DataContext.tsx to fetch reports from backend and call APIs for adding reports
- [x] Update components/auth/LoginModal.tsx if needed for new auth flow

## Testing
- [ ] Run backend and frontend
- [ ] Test login/signup, ensure no errors
- [ ] Test adding reports, verify database updates
- [ ] Verify Gemini AI functionality with API key
