# Lumo Finance - Product Requirements Document

**Version:** 1.0 (MVP)  
**Product Type:** AI-Native Financial Operating System  
**Platform:** Web (Next.js)  
**Financial Infrastructure:** Nomba APIs

---

## Table of Contents

1. [Product Overview](#product-overview)
2. [Vision](#vision)
3. [Problem Statement](#problem-statement)
4. [Proposed Solution](#proposed-solution)
5. [Target Audience](#target-audience)
6. [User Stories](#user-stories)
7. [Core Features (MVP)](#core-features-mvp)
8. [Functional Requirements](#functional-requirements)
9. [Nomba API Integration](#nomba-api-integration)
10. [AI Tool Layer](#ai-tool-layer)
11. [Technology Stack](#technology-stack)
12. [Security](#security)
13. [User Flow](#user-flow)
14. [Success Metrics](#success-metrics)
15. [Long-Term Vision](#long-term-vision)

---

## Product Overview

Lumo Finance is an AI-powered financial operating system that enables users to manage their finances through natural conversations instead of navigating traditional banking or fintech applications.

Rather than opening multiple financial apps, users simply tell Lumo what they want to accomplish, and Lumo securely executes the requested financial action through Nomba's payment infrastructure after user confirmation.

Lumo combines conversational AI, intelligent financial orchestration, and secure payment APIs to make financial interactions as simple as chatting with an assistant.

---

## Vision

Our vision is to become Africa's AI Financial Operating System, where users no longer think about which banking app or payment platform to use—they simply tell Lumo what they want to do.

### Example Interactions

- "Send ₦10,000 to David."
- "Buy ₦2,000 MTN airtime."
- "Pay my electricity bill."
- "How much have I spent on food this month?"

Lumo handles the complexity while users focus on their financial goals.

---

## Problem Statement

Managing finances in Africa often requires users to switch between multiple banking and fintech applications to complete everyday financial tasks.

### Common Challenges

- Navigating different banking interfaces
- Remembering account balances
- Copying account numbers
- Manually selecting payment providers
- Paying different bills through separate applications
- Tracking expenses across multiple platforms

This fragmented experience creates unnecessary friction for users. Despite advances in conversational AI, financial services still rely heavily on traditional app-based interfaces instead of natural language interactions.

---

## Proposed Solution

Lumo Finance introduces a conversational financial assistant that understands user intent and securely performs financial operations through Nomba APIs.

Instead of interacting directly with banking interfaces, users communicate with Lumo using natural language. The AI assistant:

- Understands financial requests
- Validates user intent
- Retrieves relevant financial information
- Prepares transactions
- Requests user confirmation
- Executes transactions through Nomba
- Provides transaction receipts and insights

This allows users to interact with finance the same way they interact with modern AI assistants.

---

## Target Audience

### Primary Users

- Students
- Young professionals
- Freelancers
- Remote workers
- Small business owners
- Digital entrepreneurs

### Secondary Users

- Families
- Merchants
- SMEs
- Cross-border workers

---

## User Stories

- As a user, I want to send money by simply describing who I want to pay.
- As a user, I want to buy airtime without navigating menus.
- As a user, I want to pay bills through a conversation.
- As a user, I want to understand my spending habits.
- As a user, I want my transactions to remain secure through explicit approval.

---

## Core Features (MVP)

### 1. AI Financial Assistant

Users can interact through:
- **Text**
- **Voice** (future phase)

**Supported requests include:**
- Send money
- Check balance
- Buy airtime
- Buy data
- Pay bills
- View transactions
- Analyze spending

### 2. Authentication

#### Current Phase
- Email Authentication
- Google Login
- OTP Verification

#### Future
- Passkeys
- Biometric Authentication

### 3. Dashboard

Displays:
- Wallet balance
- Recent transactions
- Spending summary
- AI recommendations
- Linked payment methods

### 4. Money Transfers

**User says:**
```
"Send ₦25,000 to John."
```

**Lumo:**
- Identifies recipient
- Confirms transaction
- Executes transfer through Nomba
- Returns receipt

### 5. Airtime Purchase

**Example:**
```
"Buy ₦1,000 MTN airtime."
```

Lumo completes the purchase using Nomba's airtime services.

### 6. Data Purchase

**Example:**
```
"Buy 5GB MTN data."
```

The assistant completes the transaction after confirmation.

### 7. Bill Payments

**Supported bills include:**
- Electricity
- Cable TV
- Internet
- Utilities

Transactions are processed via Nomba.

### 8. Transaction History

**User queries:**
- "Show transfers from last week."
- "Show payments above ₦50,000."

### 9. Spending Insights

**Examples:**
- "How much did I spend on transport?"
- "Where is my money going?"

Lumo categorizes and summarizes spending patterns.

---

## Functional Requirements

### Authentication

The system shall:
- Register users
- Authenticate users
- Verify users using OTP
- Manage secure sessions

### AI Engine

The system shall:
- Interpret natural language
- Detect financial intent
- Extract entities (amount, recipient, service)
- Call backend financial tools
- Generate confirmations

### Payment Engine

The system shall:
- Validate transactions
- Verify recipients
- Check account status
- Execute transactions using Nomba APIs
- Return transaction status

### Notifications

The system shall notify users when:
- Transfers succeed
- Payments fail
- Bills are completed
- Suspicious activity is detected

---

## Nomba API Integration

Nomba serves as Lumo's payment execution infrastructure.

### Planned Integrations

#### Bank Transfers
- Send funds to Nigerian bank accounts
- Verify beneficiaries
- Receive transfer confirmations

#### Airtime Purchase
- Support major Nigerian networks

#### Data Purchase
- Support mobile data bundles

#### Bill Payments
- Electricity
- Cable TV
- Internet
- Utility services

#### Transaction Status
- Retrieve payment status
- Retrieve transaction history
- Retrieve reference IDs

#### Virtual Accounts (Future)
- Assign users dedicated virtual bank accounts for funding

#### Collections (Future)
- Allow merchants and freelancers to receive payments

---

## AI Tool Layer

The AI never directly moves money. Instead, it invokes backend tools such as:

| Tool | Purpose |
|------|---------|
| `transferMoney()` | Execute bank transfers |
| `buyAirtime()` | Purchase mobile airtime |
| `buyData()` | Purchase mobile data |
| `payBill()` | Pay utilities and services |
| `getBalance()` | Retrieve account balance |
| `getTransactions()` | Fetch transaction history |
| `verifyRecipient()` | Validate recipient details |
| `analyzeSpending()` | Generate spending insights |

The backend validates requests before communicating with Nomba.

---

## Technology Stack

### Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- TanStack Query
- React Hook Form
- Zustand

### Backend

- Go
- Fiber
- PostgreSQL
- Redis

### AI

- OpenAI GPT-5 (or Anthropic Claude)
- Function Calling
- Structured Outputs
- Conversation Memory

### Financial Infrastructure

- Nomba APIs
  - Transfers
  - Airtime
  - Data
  - Bills
  - Collections (future)
  - Virtual Accounts (future)

### Authentication

- Clerk or Auth.js
- JWT
- OTP

### Infrastructure

- Docker
- GitHub Actions
- Cloudflare
- Vercel

---

## Security

Every financial action requires explicit user approval.

### Security Measures

- HTTPS encryption
- JWT authentication
- OTP verification
- PIN confirmation
- Audit logging
- Role-based access control
- API rate limiting

### Future Enhancements

- Passkeys
- Biometric authentication
- Device trust scoring
- AI fraud detection

### Key Principles

- Every payment requires confirmation
- High-value payments require OTP + PIN + Biometric (future)
- AI cannot bypass approval
- Every action is logged

---

## User Flow

```
User Login
    │
    ▼
Dashboard
    │
    ▼
User sends prompt
    │
    ▼
AI interprets request
    │
    ▼
Transaction preview
    │
    ▼
User confirms
    │
    ▼
Backend validates request
    │
    ▼
Nomba API executes transaction
    │
    ▼
Receipt and notification
```

---

## Success Metrics

### MVP Targets

| Metric | Target |
|--------|--------|
| AI intent recognition accuracy | 90%+ |
| AI response time | <2 seconds |
| Transaction completion time | <5 seconds |
| Successful transaction execution rate | 95%+ |
| User satisfaction score | 4.5+/5 |

### Growth Metrics

- Daily active users
- Transactions per user
- AI conversations per session
- User retention rate
- Customer satisfaction

### Launch Goals

- 1,000 users
- 90% successful AI intent recognition
- <2 second AI response
- <5 second transfer completion

---

## Long-Term Vision

Lumo Finance is not another banking application. It is a **Financial Operating System** that sits above banks, fintechs, mobile money providers, and digital asset wallets.

Users interact with Lumo through natural conversation, while Lumo intelligently orchestrates financial services in the background.

Over time, Lumo aims to become the default interface for managing money in Africa—making finance as simple as talking to an intelligent assistant.

---

## Development Checkpoints

Use this PRD as your yardstick for building Lumo Finance. Reference this document when:

- ✅ Planning feature implementation
- ✅ Designing the AI tool layer
- ✅ Integrating with Nomba APIs
- ✅ Building the user interface
- ✅ Implementing security measures
- ✅ Testing functionality against requirements
