# WeVideo

WED GameFi White Paper

Authors: WeVideo Labs Research Team

Version: v1.0 |  2025

Abstract​

The WED GameFi Protocol represents a groundbreaking deterministic yield system meticulously engineered and deployed on the Solana blockchain. Drawing inspiration from the robust structure of consensus algorithms, with a particular focus on Ripple's Representative Proposer Consensus Algorithm (RPCA) model, the protocol innovatively introduces a dual - token architecture consisting of WEV and WED. These tokens are governed by a set of rules that prioritize predictability, verifiability, and non - inflationary principles, ensuring long - term economic stability and user trust.​
At the heart of the WED Protocol lies an immersive ecological simulation mechanism. Users are invited to engage in a digital ecosystem where they can plant and nurture digital trees. Through regular "watering" of these virtual trees, which involves consuming the base token WEV, users gradually accrue value in the form of WED tokens over time. This gameplay not only provides an entertaining user experience but also seamlessly integrates economic incentives, blurring the lines between gaming and decentralized finance.​
The system's economic incentives are rigorously formalized through multiple innovative mechanisms. Smart contracts serve as the backbone, automating and enforcing the rules of token generation, consumption, and distribution. Time - gated functions add an element of anticipation and strategic planning, as certain actions and rewards are only available at specific time intervals. The alliance - based multiplier system encourages users to form collaborative guilds, where higher - level alliances enjoy enhanced yield speeds and additional benefits, promoting community building and cooperation. Moreover, the strict yield mathematics employed in the protocol ensures that token emissions are precisely calculated based on factors such as time, resource input, and contract type, maintaining a balanced and sustainable economic model.​
This paper delves deep into the WED Protocol, presenting comprehensive formal definitions of its key concepts, detailed descriptions of its architectural components, in - depth analysis of its economic logic, and simulation - based forecasts. These elements collectively aim to provide a solid foundation for the secure and scalable deployment of the WED Protocol as a leading Web3 GameFi infrastructure. By bridging the gap between traditional gaming and decentralized finance, the WED Protocol paves the way for a new era of blockchain - based digital economies, where users can both enjoy engaging gameplay and participate in a transparent, rewarding economic ecosystem.​

1. Introduction​
   
The blockchain landscape has undergone a remarkable transformation, evolving far beyond its origins as a mere financial infrastructure. Today, it has emerged as a versatile platform enabling the convergence of diverse sectors such as gaming, advertising, and user-generated economies. This evolution has given rise to a new paradigm where blockchain technology serves as the foundation for creating immersive, interactive, and economically rewarding ecosystems. Amidst this dynamic backdrop, the WED GameFi Protocol emerges with a clear and ambitious goal: to offer gameplay experiences that are not only engaging but also deeply aligned with long-term user incentives.​
At its core, WED is intricately linked to WeVideo's existing ad-driven WEV economy. While the WEV economy focuses on rewarding users for engaging with advertisements, WED builds upon this foundation as a second-order layer. It ingeniously transforms the simple act of ad engagement into a rich, yield-based gaming activity. In this innovative system, users no longer just passively interact with ads; instead, their interactions become the fuel that powers a virtual economy where they can plant, nurture, and harvest digital assets in the form of WED tokens. This seamless integration of advertising, gaming, and finance creates a unique value proposition, offering users the opportunity to earn rewards while enjoying an interactive gaming experience.​
Against the backdrop of an increasingly complex and competitive blockchain ecosystem, the need for secure and verifiable systems for token distribution has become paramount. In response, the WED Protocol delves into the design of a deterministic token distribution mechanism that draws inspiration from consensus logic. Consensus algorithms, the bedrock of blockchain security and trust, ensure that all network participants agree on the state of the blockchain. By emulating these principles, WED aims to create a token distribution system that is not only predictable but also verifiable by all users within the ecosystem.​
To achieve this, the WED Protocol employs a suite of sophisticated mechanisms. Token burn mechanisms play a crucial role in maintaining token scarcity and value stability. By periodically removing tokens from circulation, the protocol can control supply and prevent inflation, ensuring that the value of WED tokens remains robust over time. Alliance cooperation serves as another key pillar, fostering a sense of community and collaboration among users. Through the formation of alliances, users can pool their resources, share expertise, and unlock higher rewards, creating a virtuous cycle of growth and engagement. Additionally, the protocol's yields are mathematically bounded, meaning that token emissions are precisely calculated based on predefined parameters such as time, resource input, and contract type. This strict mathematical framework ensures that the token distribution process is transparent, fair, and resistant to manipulation, providing users with the confidence that they are participating in a secure and reliable ecosystem.​
In the following sections, this paper will delve deeper into the intricate design, technical implementation, and economic implications of the WED Protocol. By exploring these aspects in detail, we aim to provide a comprehensive understanding of how this innovative system is poised to revolutionize the GameFi space and contribute to the broader development of blockchain-based economies.

2. Protocol Architecture
   
This protocol architecture integrates blockchain technology with a token economy model, aiming to build an incentive-compatible and sustainable ecosystem. Through the collaborative operation of base tokens, yield tokens, tree contracts, and an alliance system, it achieves symbiotic value among users, developers, and the ecosystem.

2.1 Token Roles：

Two functionally complementary core tokens are designed to drive the economic circulation within the ecosystem, with clear divisions of labor:
WEV (Base Token)

·Acquisition: Users earn WEV by engaging in deep interactions with WeVideo’s advertising content, such as watching full ads, completing in-ad interactive tasks, or clicking referral links. This mechanism not only provides advertisers with effective user reach but also allows users to monetize their attention as a valuable resource.

·Utility: As the universal consumable token in the WED system, WEV is essential for activating tree contracts, performing "maintenance" operations (e.g., "watering"), unlocking premium service modules, and sustaining core ecosystem functions as its operational "fuel."
WED (Deterministic Yield Token)

·Core Features: WED is a non-inflationary token with a hard supply cap of 1,000,000,000 tokens, ensuring long-term scarcity and value stability. This design mitigates dilution risks caused by excessive issuance, making it a reliable store of value.

·Economic Purpose: Beyond serving as a medium for value storage, WED incentivizes long-term participation and ecosystem contribution. Its value is expected to appreciate with growing ecosystem demand and adoption.

2.2 Tree Contracts

Tree Contracts represent an innovative core of the protocol, leveraging NFT (Non-Fungible Token) characteristics to provide users with interactive and appreciable digital assets:
Contract Attributes

·Lifecycle Management: Each Tree Contract has a defined lifecycle, spanning creation, growth, and maturity stages—each with distinct functionalities and reward models. Upon expiration, contracts may reset or renew according to predefined rules.

·Maintenance Mechanism: Users must "water" contracts at fixed intervals by consuming WEV to sustain their operational viability. Failure to maintain regular "watering" will degrade a contract’s yield capacity or even put it into a dormant state.

·Differentiated Consumption: WEV consumption rates vary by contract type and tier. Higher-tier contracts demand more WEV but offer significantly higher WED emission efficiency, creating a risk-reward tradeoff for users.
Yield Mechanism

WED emissions from Tree Contracts follow a dual-factor calculation based on time and resource input:

·Emission volume is directly proportional to the contract’s active duration and the cumulative WEV spent on its maintenance.

·This design rewards users who invest more resources and maintain long-term engagement, fostering sustainable participation.


2.3 Alliance System

The Alliance System establishes a hierarchical guild structure to encourage collaborative participation, enhancing ecosystem cohesion and activity:
Upgrade Framework

·The system supports 20 upgrade levels, each requiring a combination of WED and WEV investments. Upgrade costs increase exponentially with tier progression, necessitating close collaboration among guild members to accumulate resources and fostering collective responsibility.

Incentive Structure

·Yield Acceleration: Higher-level alliances enjoy significantly faster WED emission rates for their members’ Tree Contracts. For example, a Level 10 alliance might achieve 3–5x the yield speed of a Level 1 alliance, creating a strong incentive for tier advancement.

·Leadership Rewards: Alliance leaders receive additional WED dividends on top of team-wide yield bonuses, recognizing their organizational efforts and motivating proactive guild management. This mechanism drives organic growth and leadership participation, ensuring the system’s long-term vitality.

Summary

The architecture creates a self-reinforcing economic loop:

·Users earn WEV through ad interactions, consume it to maintain Tree Contracts for WED yields, and reinvest WED into alliance upgrades.

·Gamified elements (e.g., contract nurturing, alliance progression) and scarce assets (fixed WED supply) drive user retention and value accumulation.

·Collaborative incentives in the Alliance System scale ecosystem participation, aligning individual goals with collective growth.

This design balances user engagement, economic sustainability, and technological innovation, laying a foundation for decentralized ecosystem governance and value co-creation.

3. Formal Definitions

Definition 1: Token Generation Function

Let ![image](https://github.com/user-attachments/assets/36b48876-511f-4a14-802c-9c37eccf33f0)

![image](https://github.com/user-attachments/assets/1bf9d946-9036-417e-9bca-c05481ea0a58)Where is the system timestamp and   ![image](https://github.com/user-attachments/assets/e4ba0637-831e-4b56-94c1-5d0694665bc1) is the i-th user’s input.

Definition 2: Yield Decay Constraint

Where D is tree duration in days and M is a multiplier.

4. Tokenomics​
   
The tokenomics of the WED Protocol are meticulously designed to foster a balanced, sustainable, and community-driven ecosystem. By strategically allocating token supplies and structuring token flows, the protocol aims to align incentives among users, developers, and ecosystem participants while maintaining long-term economic stability.​

Supply Allocation​

The total supply of WED tokens is capped at 1,000,000,000, with a carefully calibrated distribution model across three key categories:​

80% for Mining and Gameplay Rewards (800,000,000 WED): This significant portion of the supply is dedicated to rewarding users actively engaged in the protocol's core activities. Through the digital tree - planting and nurturing gameplay, as well as other mining - like mechanisms tied to ecological simulation, users can earn WED tokens over time. This allocation not only incentivizes sustained user participation but also distributes tokens organically within the community, promoting a decentralized ownership structure.​

10% for Ecosystem and Referral Activities: Earmarked to fuel the growth and expansion of the WED ecosystem, this portion of the supply is used to incentivize various initiatives. It supports activities such as user acquisition through referral programs, community building, and the development of complementary services and applications. By rewarding users who contribute to the ecosystem's outreach and development, the protocol encourages a vibrant and self - sustaining community.​

10% for Team Treasury (Vesting Locked): Reserved for the development team, this allocation provides the necessary resources for continuous protocol improvement, maintenance, and innovation. The tokens are subject to a vesting schedule, which locks them for a predefined period. This mechanism ensures that the team has a long - term stake in the project's success while preventing premature sell - offs that could disrupt the token's market stability.​

Token Flows​

The movement and utilization of tokens within the WED ecosystem are governed by a set of well - defined rules designed to maintain scarcity, fairness, and economic equilibrium:​

WEV Burn Mechanism: All WEV tokens spent by users on activities such as planting digital trees or watering them to sustain their growth are immediately transferred to a non - circulating burn pool. Once in the burn pool, these tokens are effectively removed from circulation, reducing the overall supply of WEV. This mechanism serves multiple purposes: it creates an incentive for users to engage in gameplay by making resource consumption a prerequisite for earning WED rewards, and it also helps to maintain the value of WEV by controlling its supply.​

Conditional WED Generation: WED tokens are generated through a deterministic process that is triggered only when all predefined constraints are met. These constraints include factors such as the successful maintenance of tree contracts over a specific period, the cumulative amount of WEV consumed, and compliance with the protocol's governance rules. This conditional generation ensures that WED emissions are predictable and sustainable, preventing sudden surges in supply that could devalue the token.​

On - Chain Yield and No Pre - minting: In line with the protocol's commitment to transparency and decentralization, there is no pre - minting of WED tokens. All WED tokens are generated on - chain through the established gameplay and mining mechanisms. This approach eliminates the potential for unfair advantages or central control over the initial token distribution, ensuring that every user has an equal opportunity to participate in the WED economy from its inception.​

Overall, the tokenomics model of the WED Protocol represents a carefully crafted balance between rewarding user participation, fostering ecosystem growth, and maintaining economic stability, laying a solid foundation for the protocol's long - term success.​

5. Gameplay Mechanics​

The WED Protocol's gameplay mechanics are designed to create an engaging, strategic, and rewarding experience, seamlessly integrating tokenomics with ecological simulation. Players navigate a virtual ecosystem by managing digital trees, each with unique characteristics, maintenance requirements, and automation options.​

5.1 Tree Types​

The game features a diverse range of digital tree types, each with distinct investment requirements and yield rates, allowing players to tailor their strategies based on risk tolerance and resource availability:​

·Baobab Tree: Representing an entry-level option, the Baobab tree requires an initial investment of 49 WEV tokens to plant. Once established, it generates a steady yield of 13.31 WED tokens per hour, making it an accessible choice for new players looking to familiarize themselves with the ecosystem.​

·Redwood Tree: A mid-tier investment, the Redwood tree demands a higher upfront cost of 369 WEV tokens. In return, it offers a significantly increased hourly yield of 96.1 WED tokens. This tree type appeals to players seeking a balance between investment and reward, suitable for those with moderate resources and a desire for higher returns.​

·Cherry Tree: The premium option in the game, the Cherry tree requires a substantial investment of 2988 WEV tokens. However, it boasts the highest yield potential, producing 700.3 WED tokens per hour. Ideal for experienced players with ample resources, the Cherry tree represents a high-risk, high-reward strategy within the ecosystem.​

5.2 Watering Schedules​

Maintaining digital trees is crucial for maximizing yield, and this is achieved through a structured watering schedule. Players must water their trees every 4 hours, corresponding to specific UTC time intervals (00:00, 04:00, 08:00, 12:00, 16:00, and 20:00). Failure to adhere to this schedule results in reduced total output, incentivizing consistent engagement. The cost of each watering session is calculated as 1% of the tree's hourly yield, ensuring that maintenance costs scale proportionally with the tree's productivity. This mechanic adds a layer of strategic depth, as players must manage their WEV resources carefully to optimize both short-term and long-term returns.​

5.3 Automation Tools​

To accommodate varying player preferences and lifestyles, the WED Protocol offers a suite of automation tools that streamline gameplay while providing additional opportunities for resource acquisition:​

·Auto-watering Packages: Players can purchase auto-watering packages to ensure their trees are watered on schedule without manual intervention. These packages range in cost from 100 to 500 WEV, depending on the duration and coverage. Auto-watering is particularly useful for players with limited time or those managing multiple trees simultaneously, allowing them to maintain optimal yields with minimal effort.​

·Bug-catching Quests: Engaging in bug-catching quests presents an interactive way to earn additional WEV tokens. By participating in these daily quests, players can receive rewards ranging from 0.6 to 1 WEV per day. These quests not only add an element of fun to the gameplay but also encourage players to actively monitor and care for their trees, as a healthy tree is more likely to attract bugs worth catching.​

·Daily Sign-in Bonuses: To reward regular engagement, the protocol offers daily sign-in bonuses that vary in value from 0.01 to 1.8 WEV. The bonus amount scales over a 16-day period, incentivizing players to log in consistently. This mechanic not only promotes daily interaction but also provides a steady stream of additional resources, helping players to grow their digital tree portfolios over time.

6. Alliance Protocol

6.1 Structure​

The alliance system within the WED Protocol is architected as a hierarchical, 20 - level guild structure, designed to foster collaborative growth and strategic resource management among users. This tiered system creates a clear progression path, encouraging members to work together and invest in the alliance's development for collective benefits.​

Tiered Progression​

The system is divided into 20 distinct levels, each representing a significant milestone in the alliance's evolution. As alliances ascend through the tiers, they unlock increasingly powerful capabilities, such as enhanced yield acceleration for members' tree contracts, exclusive access to advanced features, and higher - value rewards. This structured progression not only provides a sense of achievement but also incentivizes long - term commitment from participants.​

Resource Contribution Model​

Alliance members play a crucial role in the system by contributing WEV tokens, the base currency of the ecosystem. These contributions are pooled together and used to fund various alliance activities, including the maintenance of shared infrastructure, the execution of collaborative projects, and the accumulation of resources required for tier upgrades. By actively participating in the resource - contribution process, members directly impact the alliance's growth and success, reinforcing a sense of ownership and community.​

Leadership - Driven Upgrades​

Alliance leadership is central to the tier - advancement process. Leaders are responsible for overseeing the strategic direction of the alliance and making key decisions regarding resource allocation and upgrade initiatives. To progress to higher levels, leaders must consume WED tokens, the protocol's yield - based token, as a form of investment. This requirement not only ensures that upgrades are driven by committed and resourceful leaders but also aligns the interests of leadership with the long - term prosperity of the entire alliance. The consumption of WED for upgrades also helps to maintain a healthy balance within the token economy, as it reduces the circulating supply of WED and contributes to its overall value stability.​

In summary, the alliance system's structure combines a tiered progression, a member - driven resource - contribution model, and leadership - led upgrades to create a dynamic, collaborative ecosystem where users can achieve greater rewards through collective effort.

6.2 Speed and Dividend Table

![image](https://github.com/user-attachments/assets/0a3ce93c-970f-46a0-a867-301dcff0c4a5)

6.3 Exit Rules​

The exit rules of the WED Protocol's alliance system are carefully defined to maintain the integrity of the ecosystem, ensure fairness among participants, and discourage premature departures that could disrupt ongoing operations. These rules govern the consequences for users who choose to leave an alliance and are designed to align individual incentives with the long - term sustainability of the community.​

Forfeiture of Cycle Bonuses​

When a user decides to leave an alliance, they automatically forfeit all remaining cycle bonuses associated with ongoing activities. Cycle bonuses are rewards that accrue over specific time intervals and are typically tied to the performance of the alliance as a whole or individual contributions within a defined period. By relinquishing these bonuses upon departure, users are incentivized to fulfill their short - term commitments and avoid abandoning their alliances mid - cycle. This mechanism helps to ensure that all members remain actively engaged until the completion of ongoing projects or cycles, preventing any negative impact on the alliance's progress and the rewards of remaining members.​

Non - Refund Policy for Contributed Tokens​

The protocol strictly enforces a no - refund policy for any WEV or WED tokens contributed to the alliance. Once users contribute these tokens as part of their membership obligations or to support alliance upgrades, they are considered committed resources. This policy serves multiple purposes: it safeguards the financial stability of the alliance by preventing sudden withdrawals that could deplete its resources; it encourages users to make informed decisions before joining an alliance, as they understand that their token contributions are non - reversible; and it fosters a sense of long - term commitment, as members are less likely to leave if they have already invested significant resources. The non - refund rule also aligns with the overall economic design of the protocol, where 
token flows are carefully managed to maintain a balanced and sustainable ecosystem.​

In essence, the exit rules in the WED alliance system strike a balance between protecting the interests of the remaining members and the alliance itself, while also reinforcing the importance of commitment and responsibility within the community. These rules help to create a stable and reliable environment where users can confidently participate in collaborative activities, knowing that the system is structured to support long - term success.

7. Yield Simulation

Based on the WED output calculations from tree-planting activities, the protocol’s yield simulation models project key performance metrics that underscore its economic viability and incentive structure. These forecasts are derived from deterministic algorithms governing token generation, resource consumption, and alliance-level multipliers.

Key Projections

7.1.Break-Even Timeline (Levels 1–3)

·Scope: Entry-level alliances (Levels 1–3) and individual players using basic tree types (e.g., Baobab).

·Projection: Users can expect to reach a break-even point—where cumulative WED earnings offset initial WEV investments—within 7 to 10 days.

·Drivers: This timeline accounts for mandatory watering costs (1% of hourly yield), base tree output rates, and the absence of alliance-level yield accelerators at lower tiers.

7.2.Return on Investment (ROI) for Higher Tiers (Level 4+)

·Scope: Advanced alliances (Level 4 and above) leveraging mid-to-high-tier trees (e.g., Redwood, Cherry) and alliance-wide yield multipliers.

·Projection: Over a full growth cycle (typically 30–60 days), ROI can reach up to 280%.

7.3.Drivers:

·Yield Acceleration: Higher alliance levels unlock multiplicative boosts to WED emissions (e.g., Level 10 alliances may achieve 3–5x base rates).

·Economies of Scale: Bulk WEV investments in premium trees (e.g., Cherry trees requiring 2,988 WEV) yield disproportionately higher hourly WED output (700.3 WED/hr).

·Reduced Marginal Costs: Automation tools (e.g., auto-watering packages) lower maintenance costs for large tree portfolios.

7.4.WEV Burn Rate

oProjection: The protocol’s design ensures that ≥ 68% of WEV spent on tree maintenance and alliance upgrades is permanently burned (removed from circulation).

oMechanism:

·All WEV used for planting, watering, and alliance contributions is directed to a non-recoverable burn pool.
·This high burn rate reinforces WEV scarcity, aligning its value with demand from gameplay and ecosystem activities.
·Impact: A sustained burn rate strengthens the WED-WEV economic loop, as higher WEV demand (to maintain trees) drives increased WED minting, while reduced WEV supply supports long-term price stability.

Simulation Methodology

·Inputs: Tree type (Baobab/Redwood/Cherry), alliance level, watering consistency, automation tool usage, and token price assumptions.

·Variables: Time-based decay for missed watering cycles (output reduction), leadership decisions on alliance upgrades, and seasonal events (e.g., limited-time yield boosts).

·Validation: Simulations are calibrated against on-chain stress tests, ensuring alignment with Solana’s transaction throughput and smart contract execution guarantees.

Conclusion

The yield projections highlight a tiered reward structure that balances accessibility for new users (short break-even periods at lower levels) with significant upside for strategic, long-term participants (280% ROI at higher tiers). The aggressive WEV burn rate further solidifies the protocol’s deflationary economics, positioning WED as a scarce asset within a self-reinforcing gaming-finance ecosystem. These simulations underpin WED’s viability as a scalable Web3 infrastructure, where gameplay, advertising, and tokenomics converge to create sustainable user incentives.

8. Security Considerations

The WED Protocol prioritizes robust security measures to safeguard user assets, maintain data integrity, and ensure trust in its deterministic yield mechanisms. Leveraging Solana’s high-performance blockchain infrastructure, the protocol implements multi-layered safeguards designed to mitigate vulnerabilities and enforce transparency.

8.1. Anti-Replay Mechanisms for Watering Events

·Mechanism: All watering transactions (WEV consumption for tree maintenance) are time-stamped and cryptographically linked to specific yield intervals (e.g., 4-hour cycles).

·Impact: This prevents replay attacks, where malicious actors attempt to resend valid transactions to fraudulently trigger multiple "watering" events. Each transaction is valid only for its designated interval, ensuring that WEV is consumed fairly and accurately.

8.2. Wallet Locking During Yield Intervals

·Implementation: User wallets are temporarily locked for tree-related operations (e.g., selling, transferring) during active yield intervals.

·Purpose: This prevents unauthorized modifications to tree contracts or abrupt asset withdrawals mid-cycle, which could distort yield calculations. Locking ensures that WED emissions are computed based on stable, unchanging states throughout each interval.

8.3. Immutable Alliance Upgrades

·Design Principle: Once an alliance leader initiates an upgrade using WED and WEV, the transaction is  (irreversible) and recorded on the blockchain.

·Security Benefit: Immutability prevents rollbacks or tampering with upgrade progress, ensuring that resource investments and tier advancements are permanent and verifiable. This protects against governance attacks or leadership malfeasance.

8.4. Transparent Burn Pool Visibility

·On-Chain Accountability: The WEV burn pool is a public address on the Solana blockchain, fully visible via explorers like Solscan or Solana Beach.

·Auditability: Users can independently verify the volume of WEV burned in real time, ensuring that the protocol’s deflationary mechanics (≥68% burn rate) are enforced as designed. This transparency reinforces trust in the token economy.

8.5. Audit-Ready Yield Formula (Open-Source)

·Code Quality: The deterministic yield algorithm governing WED emissions is open-source and subject to third-party audits.

·Components: The formula factors in time elapsed, WEV consumed, tree type, and alliance multiplier, with no hidden variables.

·Security Impact: Open sourcing allows the community and auditors to validate that yields are mathematically consistent and free from backdoors or exploitable flaws, aligning with Web3’s principles of transparency and decentralization.

8.6. Solana Blockchain Foundations

·Network Security: Built on Solana’s proof-of-stake (PoST) consensus, the protocol benefits from low transaction fees, high throughput (4,000+ TPS), and resistance to 51% attacks.

·Smart Contract Safety: Solidity-like Sealevel smart contracts undergo rigorous validation via Solana’s runtime, reducing risks of execution errors or vulnerabilities.

Conclusion

By combining cryptographic safeguards, on-chain transparency, and open governance, the WED Protocol establishes a secure foundation for its GameFi ecosystem. These measures not only protect user assets and data but also ensure that the protocol’s economic rules—from token burns to yield calculations—operate as intended, without central control or manipulation. As part of its ongoing security strategy, the team will conduct regular penetration testing and participate in bug bounty programs to address emerging risks proactively.

9. Utility and Incentive Analysis

The WED Protocol’s utility and incentive framework creates a self-reinforcing ecosystem where user behavior directly drives token demand, retention, and economic velocity. By aligning gameplay mechanics with on-chain resource dynamics, the protocol fosters a decentralized yield economy that rewards participation at all levels.

9.1. High-Yield Users Drive Token Demand

·Mechanism: Users operating premium tree types (e.g., Cherry trees) or high-level alliances require substantial WEV for maintenance and upgrades.

·A single Cherry tree demands 2,988 WEV for planting and 7 WEV/hr (1% of 700.3 WED/hr yield) for watering, creating sustained demand for WEV.

·High-tier alliances (Level 10+) amplify this demand by requiring WED-WEV combinations for upgrades, further tightening the WED-WEV liquidity loop.
·Impact: Scalable demand from power users stabilizes token prices and incentivizes new participants to enter the ecosystem, creating a "network effect" for both tokens.

9.2. Entry-Level Automation Fosters Retention

·Design for Accessibility: Low-cost automation tools, such as 100 WEV auto-watering packages and 0.6–1 WEV daily bug-catching quests, lower the barrier to entry for casual users.

·Behavioral Incentives:
 
   ·Daily sign-in bonuses (0.01–1.8 WEV, scaled over 16 days) encourage consistent engagement, reducing churn.

   ·Automated maintenance ensures the "set it and forget it" usability, appealing to users who prioritize convenience over micromanagement.

·Outcome: New users can achieve small but steady WED yields with minimal effort, gradually progressing to higher-risk, higher-reward strategies as they acclimate to the ecosystem.

9.3. Alliance-Driven Burn Ensures Token Velocity

·Burn Dynamics: Alliance activities contribute significantly to the WEV burn rate (≥68% of WEV never circulates):

·Members’ WEV contributions to alliance pools are permanently burned, not redistributed.

·Leaders must burn WED to initiate upgrades, reducing the supply of yield tokens.

·Economic Velocity:

·Reduced WEV supply increases its marginal utility, driving demand for ad interactions (the sole WEV minting source).

·WED burn from upgrades creates scarcity, enhancing its value as a store of value.

·Feedback Loop: Higher alliance tiers require more burns, accelerating token velocity and rewarding early adopters who dominate premium tiers.

9.4. Daily Tasks Reduce Exit Friction

·Quest-Based Retention: Daily activities like bug-catching and sign-ins create "soft locks" by:

·Granting incremental rewards that accumulate over time (e.g., a 16-day sign-in streak yields up to 14.4 WEV).

·Linking rewards to continuous participation, making it costly for users to abandon their progress mid-streak.

·Psychological Inertia: Users who invest time in daily tasks are more likely to stay engaged, as exiting would forfeit pending rewards and sunk costs (e.g., uncollected WED from active trees).

Conclusion: Decentralized Yield Simulation Economy

WED’s utility and incentives form a closed-loop system where:

·Users trade attention (via ads) for WEV, convert it into WED through gameplay, and reinvest in alliances for amplified yields.

·Tokenomics thrive on scarcity (WED cap, WEV burns) and demand (high-tier resource needs).

·Decentralization is enforced via open-source code, on-chain transparency, and community-driven alliance governance.

By aligning effort with resource consumption, the protocol transcends traditional GameFi models, creating a verifiable, scalable economy where users collectively determine value through participation. This design not only sustains long-term engagement but also positions WED as a blueprint for blockchain-based ecosystems merging gaming, finance, and user-generated value.

10. Roadmap

The WED Protocol’s roadmap outlines a phased approach to development, focusing on iterative ecosystem expansion, technological integration, and community governance. Each milestone is designed to build foundational infrastructure, enhance user engagement, and solidify WED’s position as a leading Web3 GameFi platform.

Q2 2025: Beta Launch of Tree System

·Core Deliverables:
·Launch a minimum viable product (MVP) of the digital tree simulation system on Solana, featuring basic tree types (Baobab, Redwood) and manual watering mechanics.
·Integrate WEV acquisition via WeVideo’s ad network, allowing users to earn base tokens through ad interactions.
·Deploy a testnet for community feedback, stress-testing tree contract durability and WEV-WED economic flows.
·Objective: Validate core gameplay loops and token mechanics while building an initial user base.

Q3 2025: Alliance Engine and DApp Integration

·Key Developments:
·Launch the alliance system with a 20-level guild structure, enabling multiplayer collaboration, resource pooling, and tiered yield accelerators.
·Introduce automation tools (auto-watering, bug-catching quests) and expand tree types (e.g., Cherry trees) to cater to strategic gameplay.
·Integrate a user-friendly DApp interface, supporting wallet connectivity (Phantom, Solflare), real-time yield tracking, and social sharing features.
·Objective: Foster community-driven growth through collaborative gameplay and improve accessibility via intuitive UX.

Q4 2025: DAO Governance via WED Staking

·Governance Transition:

·Launch a WED staking mechanism allowing holders to participate in protocol governance, voting on upgrades like tree types, burn rates, and alliance rules.

·Decentralize decision-making through a DAO structure, enabling community-led initiatives and reducing central control.

·Implement security audits for smart contracts and establish a bug bounty program to reinforce ecosystem resilience.

·Objective: Shift power to users, enhance decentralization, and institutionalize long-term governance.

2026: Cross-Chain Deployment and Treasury Yield Vaults

·Scalability and Innovation:

·Expand to Ethereum and Polygon via cross-chain bridges, unlocking access to broader DeFi ecosystems and multi-chain users.

·Introduce treasury yield vaults, allowing alliances to stake WED for passive income through yield farming and liquidity provision.

·Develop NFT integrations (e.g., rare tree skins, alliance badges) to enhance digital asset ownership and customization.

·Objective: Increase market reach, diversify revenue streams, and solidify WED as a multi-chain GameFi hub.

Strategic Vision

The WED Protocol’s strategic vision is anchored in user-centric innovation and technologically robust infrastructure, designed to evolve incrementally into a cohesive, scalable ecosystem. By prioritizing seamless integration of gameplay, economics, and blockchain technology, the protocol aims to redefine how users engage with decentralized finance (DeFi) through gamified experiences.

10.1.Core Pillars:

User-Centric Innovation

·Inclusive Design: Cater to diverse user segments—from casual gamers seeking low-effort rewards to strategic players optimizing yield strategies—through tiered gameplay (e.g., entry-level Baobab trees vs. premium Cherry trees) and accessibility features like auto-watering tools.

·Community Governance: Empower users via DAO mechanisms, allowing WED stakers to vote on key parameters (e.g., burn rates, alliance rules), fostering a sense of ownership and alignment with ecosystem goals.
Technological Robustness

·Solana Ecosystem Alignment: Leverage Solana’s high-throughput (4,000+ TPS), low-cost transactions, and PoST consensus to ensure smooth gameplay, rapid token transfers, and resistance to security threats.

·Cross-Chain Interoperability: Expand beyond Solana to Ethereum, Polygon, and other EVM-compatible chains by 2026, enabling multi-chain asset flows, access to broader DeFi liquidity pools, and engagement with diverse user bases.

10.2.Market Positioning:

·Dual Audience Capture:

·Casual Gamers: Attract users through intuitive GameFi mechanics (e.g., tree nurturing, daily quests) that gamify token earning, reducing barriers to Web3 adoption.

·DeFi Enthusiasts: Appeal to sophisticated users via deterministic yield models, alliance-driven economies of scale, and treasury yield vaults, positioning WED as a scalable yield-generating asset.

·Mass Adoption of Blockchain Yield Economies: Bridge the gap between traditional gaming and DeFi by proving that play-to-earn models can be sustainable, transparent, and rewarding without reliance on speculative bubbles.

10.3.Agility and Future-Proofing:

·Adaptive Development Cycle: Regular updates (e.g., quarterly roadmap milestones) and community feedback loops ensure the protocol evolves with market trends (e.g., emerging NFT use cases, regulatory shifts).

·Regulatory Compliance: Proactively integrate compliance frameworks (e.g., KYC for ad interactions, transparent token audits) to maintain  (legitimacy) across jurisdictions.

·Security as a Foundation: Continuous smart contract audits, bug bounty programs, and immutable on-chain records (e.g., burn pools, alliance upgrades) reinforce trust and mitigate systemic risks.

10.4.Long-Term Vision:

WED seeks to become the de facto infrastructure for Web3 GameFi, where users seamlessly earn, trade, and govern a decentralized economy through gameplay. By embedding economic incentives in engaging experiences and leveraging cutting-edge blockchain technology, the protocol aims to drive widespread adoption of yield-based ecosystems, proving that Web3 can be both financially rewarding and technologically resilient.

This vision is not static; it evolves with its community, ensuring WED remains a leader in a rapidly innovating landscape—future-proofed by adaptability, transparency, and a relentless focus on user value.

Appendix A: Technical Diagram

![image](https://github.com/user-attachments/assets/6267f9e1-a014-4a89-8c06-db5dee242403)


Appendix B: Yield and Burn Tables

This appendix references critical supporting documents for the WED Protocol’s economic modeling, providing transparent access to underlying calculations and validation data. The tables and models cited here form the basis for yield projections, burn rate analyses, and alliance upgrade mechanics discussed throughout the paper.

Reference Materials

Tree Planting Yield Calculation Spreadsheet (Tree planting output WED calculation)

·Content: A detailed Excel model simulating WED emissions for each tree type (Baobab, Redwood, Cherry) across varying time intervals, accounting for:

·Hourly yield rates (e.g., 13.31 WED/hr for Baobab).

·WEV consumption for watering (1% of hourly yield per 4-hour cycle).

·Impact of missed watering cycles on total output.

·Break-even analysis comparing initial WEV investment to cumulative WED earnings.

·Usage: Enables users and auditors to replicate yield projections and validate the protocol’s deterministic algorithms.

Alliance Upgrade Calculation Document (WED Alliance Upgrade Calculation)

·Content: A structured analysis of the 20-level alliance system, including:

·Tier-specific requirements for WED and WEV investments (e.g., Level 4+ upgrades requiring combined token inputs).

·Yield acceleration multipliers at each tier (e.g., Level 10 alliances achieving 3x base output).

·Leadership (leadership dividend) structures and their impact on WED distribution.

·Burn rates associated with upgrade transactions and member contributions.

·Usage: Provides a framework for alliance leaders to strategize resource allocation and forecast returns on collective investments.

Accessibility and Validation

·On-Chain Integration: Raw data from these models is encoded into Solana smart contracts, ensuring real-time calculations align with the referenced spreadsheets.

·Audit Process: Both documents will undergo third-party review as part of the protocol’s security audit cycle, with findings published on the project’s GitHub repository.

·Community Access: Users may request access to the password-protected files via the official WED Discord channel, subject to non-disclosure agreements for early-stage testing.

Purpose of Tables

The yield and burn tables serve as critical tools for:

·Transparency: Demonstrating how tokenomics and gameplay mechanics translate into tangible user rewards.

·Strategic Planning: Allowing players to optimize tree selection, alliance participation, and resource management.

·Economic Validation: Providing a foundation for external analysts to evaluate the protocol’s sustainability and growth potential.

License

This work is licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0). This license allows for broad reuse, adaptation, and distribution of the content, provided the following conditions are met:

Attribution: Users must give appropriate credit to the original authors, provide a link to the license, and indicate if changes were made. For example:
"This work is based on the WED GameFi Protocol documentation, licensed under CC BY 4.0."
ShareAlike (Optional): While not required under the BY 4.0 license, users are encouraged to distribute derivative works under the same or a compatible license to promote open collaboration.
No Additional Restrictions: Users may not apply legal terms or technological measures that legally restrict others from exercising the license’s permissions.

Scope of the License

·Applicability: The license covers all original content within this documentation, including text, technical specifications, economic models, and visual elements (where applicable).

·Open Collaboration: The CC BY 4.0 license aligns with the protocol’s ethos of decentralization and transparency, enabling developers, researchers, and enthusiasts to build upon, modify, and distribute the work for any purpose, including commercial use.

How to Cite

For academic or professional use, please cite this work as:

"WED GameFi Protocol Documentation. Licensed under Creative Commons Attribution 4.0 International License."

License Links

·Full License Text: https://creativecommons.org/licenses/by/4.0/

·Summary: https://creativecommons.org/licenses/by/4.0/legalcode.txt

By leveraging this license, the WED team aims to foster a collaborative ecosystem where knowledge and innovation are shared openly, accelerating the development of decentralized GameFi infrastructure and advancing the broader Web3 community.

Contact

postmaster@wevideo.cc
