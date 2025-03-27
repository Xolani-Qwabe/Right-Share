<<<<<<< HEAD


=======
# Right-Share

**A blockchain-powered digital music label that funds, publishes, and manages artists' projects through NFT-based revenue sharing, with automated royalty distribution and compliance with South African collection societies.**  

---

## **🎵 Overview**  
We operate as a **next-gen digital music label** focused on the South African market, using blockchain to:  
✔ **Fund artists** by selling NFTs representing ownership in master recordings & publishing rights  
✔ **Automate royalty splits** to producers, songwriters, and engineers via smart contracts  
✔ **Handle licensing & registration** with South African collection societies (SAMRO, CAPASSO, SAMPRA)  
✔ **Distribute music** while enforcing transparent revenue sharing  

Investors buy NFTs to share in streaming royalties, sync licensing, and other income streams.  

---

## **🎛️ Core Features**  

### **1. Artist Onboarding & Project Funding**  
- Artists submit projects with:  
  - Demos  
  - Budget requirements  
  - Proposed royalty splits (producers, writers, etc.)  
- Label evaluates & greenlights projects  
- NFTs minted to represent % ownership in master + publishing  

### **2. Smart Contract Royalty Distribution**  
- **Automated payments** to contributors (via Avalanche C-Chain):  
  - Producers (%)  
  - Songwriters (%)  
  - Session musicians (fixed fees) and % if composed any part of the music
  - Publisher (%)  
- **NFT holders** earn from:  
  - Streaming (Spotify, Apple Music)  
  - Sync licensing (films, ads)  
  - YouTube Content ID
  - Event ticket sales
  - Project Merchandise
  - Artist Bookings that falls within single release to 2 years after album releases    

### **3. Licensing & Rights Management (SA Focused)**  
- Auto-register with:  
  - **SAMRO** (Composition royalties)  
  - **CAPASSO** (Publishing/mechanical rights)  
  - **SAMPRA** (Master recording rights)  
  - **RiSA** (Recording Industry of South Africa)  
- **NFTs = proof of ownership** for royalty claims  

### **4. Revenue Collection & Payouts (ZAR Compatible)**  
- Aggregates earnings from:  
  - Local streaming platforms (like Spotify SA, Apple Music SA)  
  - International DSPs  
  - Sync deals with SA broadcasters (SABC, eTV, etc.)  
- **Converts to ZAR-pegged stablecoins** for local payouts  
- **Quarterly distributions** to NFT holders & contributors  

### **5. Credential Verification (Veramo)**  
- **Verify identities** of:  
  - Artists (with SA ID checks)  
  - Producers/writers (via SAMRO membership checks)  
- **Issue DIDs** for industry participants and service providers/ project contractors 

---

## **⚙️ Tech Stack**  

| **Category**       | **Technologies** |  
|--------------------|----------------|  
| **Frontend**       | Next.js, TypeScript |  
| **Blockchain**     | Avalanche C-Chain, viem, Hardhat |  
| **Smart Contracts**| RoyaltySplitter, NFTRevenueShare |  
| **Payments**       | ZAR-pegged stablecoins, Avax, Paystack, Binance API, Local bank integrations |  
| **Licensing**      | SAMRO, CAPASSO, RISA, SAMPRA, RADIO MONITOR|  
| **Identity**       | Veramo (DIDs + VCs) |  
| **Database**       | MongoDB (metadata), SQLite (local cache) |  
| **Storage**        | IPFS (audio files, contracts, credentials, song masters) |  

---

## **📌 Smart Contract Workflow**  

1. **Project Approval** → Label signs artist & sets terms  
2. **NFT Minting** → Investors buy shares (e.g., 1 NFT = 0.1% of master)  
3. **Revenue Collection** → Streaming/sync royalties pooled in contract  
4. **Auto-Distribution** → Quarterly payouts to:  
   - NFT holders (investors)  
   - Artists (20-50%)  
   - Producers/writers (pre-set %)  

---

## **🚀 Getting Started**  

### **1. Clone Repo**  
```bash

```

### **2. Install Dependencies**  
```bash
npm install
```

### **3. Set Up Environment**  
```env
# Avalanche
AVALANCHE_RPC_URL=https://api.avax.network/ext/bc/C/rpc  
PRIVATE_KEY=your_deployer_key  

# APIs


### **4. Deploy Contracts**  
```bash
npx hardhat run scripts/deploy.js --network avalanche
```

---

## **📜 License**  
Proprietary (All rights reserved)  

---

## **📬 Contact**  
**Label Team**  
- Email: info@rightshare.co.za  
- Twitter: @RightShareSA  

---

**💿 Revolutionizing SA music funding & royalties with blockchain.**  
**🎶 SA artists get funded. Investors earn royalties. Everyone wins.**  

---

### **Want to partner?**  
We're onboarding SA artists, producers, and investors. [Apply here](#).  

>>>>>>> c21db50 (edited readme)
