const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const posts = [
  {
    slug: "building-trust-through-consistent-support",
    title: "Building trust through consistent support",
    excerpt: "Why familiar faces and steady routines are the real foundation of independence — and how continuity of support changes everything for the people we work with.",
    content: `
      <p class="lede">Ask anyone in supported living what matters most, and few will lead with tasks. They talk about the person who knows how they take their tea, who remembers the name of their best friend, who notices when something isn't quite right. They talk about trust — and trust is built on consistency.</p>

      <h2>Why continuity changes everything</h2>
      <p>In supported living, the same small team working with you day after day isn't a luxury — it's the foundation of safe, effective support. A familiar support worker spots subtle changes early: a slight withdrawal from activities, a new hesitation about going out, a quieter mood that doesn't lift. These observations, gathered over weeks rather than minutes, are what keep people safe and help them thrive.</p>
      <p>Continuity also protects dignity. When you've explained your routine and preferences once, you shouldn't have to explain them again to a stranger every shift. Consistent support workers carry that understanding with them, so support feels personal rather than procedural.</p>

      <figure>
        <div class="img-frame ratio-2-1"><img src="/images/feature-2.jpg" alt="A support worker and resident working on a plan together" /></div>
        <figcaption>Familiar faces and steady routines are what turn a support shift into a genuine relationship.</figcaption>
      </figure>

      <h3>What consistency looks like in practice</h3>
      <p>At DeRivian, we build rotas around keeping the same small team in your life wherever possible. We invest in our staff — through thorough induction, ongoing development, regular supervision and fair pay — precisely because people who feel valued stay. Low staff turnover isn't just good for our team; it's what makes continuity of support possible for the people we support.</p>
      <p>It also means better communication. Our digital support records keep everyone aligned, so even when a regular support worker takes well-earned leave, whoever steps in arrives already knowing your story, your preferences and your goals.</p>

      <blockquote>"You can't build trust in a single shift. You build it in the hundredth — when someone walks in, already knowing exactly how you like things done."</blockquote>

      <h3>Independence is the goal</h3>
      <p>Consistency and independence go hand in hand. When a support worker truly knows you, they know when to step back and let you do something yourself, and when to gently offer a hand. That judgement — earned through familiarity — is what helps people grow in confidence rather than become dependent.</p>
      <p>That's the heart of person-centred support: not a fixed list of tasks, but a relationship that adapts as you do. It's slower to build and harder to deliver than a rota of rotating faces — and it's the only kind of support we believe in.</p>
    `,
    category: "Care",
    categoryKey: "care",
    featured: true,
    authorName: "Vivienne Ewah",
    authorInitials: "VE",
    authorRole: "Registered Manager",
    readTime: 4,
    publishedAt: new Date("2026-03-12"),
    imageUrl: "/images/blog-0.jpg",
    imageAlt: "Two people in warm conversation on a sofa at home",
    tags: ["Continuity of care", "Person-centred", "Safeguarding", "Independence"],
  },
  {
    slug: "understanding-cqc-standards-in-supported-living",
    title: "Understanding CQC standards in supported living",
    excerpt: "What quality support really looks like under the five fundamental standards — and how we meet them every single day.",
    content: `
      <p class="lede">The Care Quality Commission's five key questions — is care safe, effective, caring, responsive and well-led? — form the backbone of how supported living services are assessed and regulated in England. Understanding what those standards mean in practice is the first step to recognising excellent support when you see it.</p>

      <h2>The five key questions in practice</h2>
      <p>Safe care means more than avoiding accidents. It encompasses safeguarding practices, medication management, infection control and robust risk assessments tailored to each individual's home environment. At DeRivian, every care plan includes a detailed risk assessment reviewed regularly with the client and their family.</p>
      <p>Effective care links every action to outcomes that matter to the person being supported. We track progress against agreed goals, adjust care plans when circumstances change, and communicate regularly with GPs and specialist teams to ensure our work complements wider healthcare.</p>

      <h2>What well-led really means</h2>
      <p>Responsive care means listening — and acting on what you hear. Our managers hold regular reviews with clients and families, and every team member is empowered to raise concerns or suggestions without fear. A culture of continuous improvement, not box-ticking, is what keeps standards genuinely high.</p>
      <p>Well-led organisations have clear values that staff understand and act on every day. Our three pillars — Care, Comfort and Compassion — aren't slogans. They guide how we recruit, how we train, and how we respond when things don't go to plan.</p>
    `,
    category: "CQC Updates",
    categoryKey: "cqc",
    featured: false,
    authorName: "Deborah Brown",
    authorInitials: "DB",
    authorRole: "Director",
    readTime: 5,
    publishedAt: new Date("2026-02-28"),
    imageUrl: "/images/blog-1.jpg",
    imageAlt: "A person reviewing care information on a tablet",
    tags: ["CQC", "Quality", "Regulation", "Standards"],
  },
  {
    slug: "independence-matters-more-than-you-might-think",
    title: "Independence matters more than you might think",
    excerpt: "How small daily choices and routines shape the quality of supported living — and why we protect them.",
    content: `
      <p class="lede">When people talk about supported living, the conversation often focuses on what support workers do. But the most important question is what the person being supported is able to do for themselves — and how good support can protect and expand that space, rather than quietly shrink it.</p>

      <h2>The meaning of small choices</h2>
      <p>Choosing what to have for breakfast, deciding when to get up, keeping a favourite chair facing the window — these might seem insignificant to an outside observer. But for someone receiving care at home, they represent the texture of a life lived on their own terms. Good care protects those choices as fiercely as it manages any clinical risk.</p>
      <p>At DeRivian, we train our team to ask before doing, to encourage where possible, and to step back whenever a client can manage something independently — even if it takes longer or looks a little different than the carer might do it themselves.</p>

      <h2>When support enables rather than replaces</h2>
      <p>The best care builds confidence. We've seen clients who initially needed help with most daily tasks gradually take back tasks they thought they'd lost — because their carer encouraged them, created the right conditions, and celebrated the progress. That's what person-centred care looks like in practice: not a fixed package of tasks, but a dynamic partnership that adapts as the person grows.</p>
    `,
    category: "Supported Living Advice",
    categoryKey: "advice",
    featured: false,
    authorName: "Rilindis Njotu",
    authorInitials: "RN",
    authorRole: "Director",
    readTime: 3,
    publishedAt: new Date("2026-02-14"),
    imageUrl: "/images/blog-2.jpg",
    imageAlt: "Two people relaxing together at home",
    tags: ["Independence", "Person-centred", "Supported living"],
  },
  {
    slug: "summer-gathering-brings-families-together",
    title: "Summer gathering brings families together",
    excerpt: "A day of music, food and meaningful connection — celebrating the community at the heart of our care.",
    content: `
      <p class="lede">On a warm Saturday in July, the courtyard outside our Sydenham office filled with familiar faces — residents, families, support workers and neighbours — for our annual summer gathering. What started as a small thank-you event has grown into one of the highlights of our year.</p>

      <h2>A day built on connection</h2>
      <p>There was food from a dozen different traditions — samosas, jerk chicken, bara brith, and a particularly popular rum cake contributed by one of our longest-standing clients. A local steel band played through the afternoon, and for an hour or so it felt less like an event and more like a street party in the best possible sense.</p>
      <p>For many of the people we support, large social gatherings can feel overwhelming. Our team worked carefully with each client beforehand to prepare them for the day — and to make sure anyone who wanted to attend felt genuinely welcomed, not just included as an afterthought.</p>

      <h2>Why community matters in care</h2>
      <p>Isolation is one of the most significant risks facing older adults and those with long-term conditions. Events like our summer gathering don't solve that problem, but they push back against it. They remind people that they're part of something — a community that sees them, values them, and shows up for them.</p>
    `,
    category: "Community Events",
    categoryKey: "community",
    featured: false,
    authorName: "Vivienne Ewah",
    authorInitials: "VE",
    authorRole: "Registered Manager",
    readTime: 3,
    publishedAt: new Date("2026-07-20"),
    imageUrl: "/images/feature-0.jpg",
    imageAlt: "People laughing together in a living room",
    tags: ["Community", "Events", "Wellbeing"],
  },
  {
    slug: "nutrition-tips-for-staying-well-at-home",
    title: "Nutrition tips for staying well at home",
    excerpt: "Simple, practical ways to support good nutrition and hydration through every season of the year.",
    content: `
      <p class="lede">Good nutrition is one of the most powerful tools for staying well at home — yet it's also one of the areas where people most often struggle, especially those living alone or managing a health condition. These practical tips are designed for clients, families and carers alike.</p>

      <h2>Hydration first</h2>
      <p>Many people underestimate how much fluid they need, particularly in warmer months and as we age — the sensation of thirst can become less reliable over time. Aim for six to eight glasses of fluid a day, and don't wait until you feel thirsty. Herbal teas, diluted fruit juice and soups all count alongside water.</p>
      <p>For carers, one of the simplest habits to build is placing a glass of water within easy reach whenever you visit — and gently encouraging the client to drink before you leave. Small prompts, consistently applied, make a real difference over time.</p>

      <h2>Making meals matter</h2>
      <p>Appetite can diminish for many reasons — medication, reduced activity, low mood, or simply the effort of preparing food alone. Smaller, more frequent meals are often easier to manage than three large ones. Focus on nutrient-dense foods: eggs, cheese, nuts, oily fish and fortified cereals provide a lot of benefit in modest portions.</p>
      <p>Cultural food preferences matter too. At DeRivian, we ask every client about their dietary needs, cultural requirements and food preferences at the outset — and we revisit those conversations regularly, because tastes and needs change.</p>
    `,
    category: "Care Tips",
    categoryKey: "tips",
    featured: false,
    authorName: "Rilindis Njotu",
    authorInitials: "RN",
    authorRole: "Director",
    readTime: 4,
    publishedAt: new Date("2026-01-30"),
    imageUrl: "/images/feature-3.jpg",
    imageAlt: "A person preparing a healthy meal in a kitchen",
    tags: ["Nutrition", "Hydration", "Wellbeing", "Care tips"],
  },
  {
    slug: "choosing-a-supported-living-provider-a-family-guide",
    title: "Choosing a supported living provider: a family guide",
    excerpt: "The questions worth asking, the standards worth expecting, and how to find the right supported living service.",
    content: `
      <p class="lede">Choosing a supported living provider for yourself or a family member is one of the most significant decisions you'll make. It deserves careful thought, clear information and the confidence to ask difficult questions. This guide is designed to help you do exactly that.</p>

      <h2>What to look for</h2>
      <p>Start with CQC registration — every care and support provider working in England must be registered with the Care Quality Commission, and their inspection reports are publicly available at cqc.org.uk. Look not just at the rating but at the detail: what was praised, what was flagged, and how the provider responded.</p>
      <p>Ask about staff continuity. High turnover is one of the clearest warning signs in supported living — it undermines the relationships that make meaningful support possible. Ask how long staff typically stay, what their induction looks like, and how the provider handles cover when a regular support worker is unavailable.</p>

      <h2>Questions worth asking</h2>
      <p>How will the care plan be built — and who will be involved? A good provider will assess the person's needs, preferences and goals carefully before writing a care plan, and will review it regularly. The person receiving care should be genuinely central to that process, not an afterthought.</p>
      <p>What happens when something goes wrong? Ask specifically about their complaints procedure, how they handle safeguarding concerns, and who to contact in an emergency. A provider who answers these questions clearly and without defensiveness is one you can trust.</p>
    `,
    category: "Supported Living Advice",
    categoryKey: "advice",
    featured: false,
    authorName: "Deborah Brown",
    authorInitials: "DB",
    authorRole: "Director",
    readTime: 6,
    publishedAt: new Date("2026-01-15"),
    imageUrl: "/images/feature-1.jpg",
    imageAlt: "Two colleagues reviewing care notes together",
    tags: ["Choosing care", "Family guide", "CQC", "Quality"],
  },
  {
    slug: "medication-safety-a-guide-for-families",
    title: "Medication safety: a guide for families",
    excerpt: "How safe medication support works at home, and the simple checks that keep your loved one well.",
    content: `
      <p class="lede">Medication errors are one of the most common — and most preventable — causes of hospital admissions among older adults. Understanding how medication support works at home, and what to look out for, is one of the most important things a family can do to keep their loved one safe.</p>

      <h2>How we manage medication</h2>
      <p>At DeRivian, every client's medication support is detailed in their care plan — covering what medication they take, when, in what form, and any known interactions or side effects to monitor. Our carers are trained to administer medication safely, to record every dose, and to raise concerns with their manager or the client's GP immediately if something doesn't seem right.</p>
      <p>We use Monitored Dosage Systems (blister packs) where appropriate, which make it easier to see at a glance whether a dose has been taken. But we always work alongside pharmacists and GPs rather than in isolation — medication management is a team effort.</p>

      <h2>What families can do</h2>
      <p>Keep an up-to-date list of all medication — including over-the-counter medicines, supplements and herbal remedies — and share it with your care provider and GP. Medication reviews should happen at least annually, or more frequently if new conditions develop or medications change. Don't be afraid to ask questions: understanding why each medication is prescribed helps everyone involved to spot potential problems early.</p>
    `,
    category: "Care Tips",
    categoryKey: "tips",
    featured: false,
    authorName: "Vivienne Ewah",
    authorInitials: "VE",
    authorRole: "Registered Manager",
    readTime: 4,
    publishedAt: new Date("2025-12-10"),
    imageUrl: "/images/feature-4.jpg",
    imageAlt: "A care professional reviewing medication in a calm setting",
    tags: ["Medication", "Safety", "Care tips", "Family"],
  },
  {
    slug: "how-we-prepare-for-a-cqc-inspection",
    title: "How we prepare for a CQC inspection",
    excerpt: "A behind-the-scenes look at the systems, records and training that keep our care inspection-ready all year round.",
    content: `
      <p class="lede">When the Care Quality Commission visits a care provider, they're looking for evidence of safe, effective, caring, responsive and well-led care — not just on the day of inspection, but consistently, over time. The best preparation for a CQC inspection is running your service well every day.</p>

      <h2>Living by our policies</h2>
      <p>Many providers have excellent policies on paper that don't translate into daily practice. At DeRivian, we work hard to close that gap. Our policies are reviewed regularly, discussed in team meetings, and reflected in the way we train new staff. When a CQC inspector asks a carer about our safeguarding procedure, we want them to be able to answer from genuine understanding — not because they memorised something the night before.</p>
      <p>Records are central to CQC inspection. We maintain detailed, contemporaneous care records that are accessible to inspectors, and we audit them regularly ourselves. If a record isn't good enough for a CQC inspector, it isn't good enough for us.</p>

      <h2>Involving the people we support</h2>
      <p>CQC inspectors speak directly to clients and families, and those conversations carry enormous weight. We believe the best thing we can do to prepare for those conversations is to make sure the people we support are genuinely happy with their care — and to act quickly when they're not. We run regular satisfaction surveys, hold open feedback sessions, and have a clear, accessible complaints process.</p>
    `,
    category: "CQC Updates",
    categoryKey: "cqc",
    featured: false,
    authorName: "Deborah Brown",
    authorInitials: "DB",
    authorRole: "Director",
    readTime: 5,
    publishedAt: new Date("2025-11-22"),
    imageUrl: "/images/feature-2.jpg",
    imageAlt: "A manager reviewing documentation with a colleague",
    tags: ["CQC", "Inspection", "Quality", "Compliance"],
  },
  {
    slug: "volunteers-needed-for-our-autumn-coffee-mornings",
    title: "Volunteers needed for our autumn coffee mornings",
    excerpt: "Join our friendly coffee mornings across Sydenham and South London — a warm welcome, good company and a cuppa await.",
    content: `
      <p class="lede">Starting this September, we're launching a series of monthly coffee mornings for clients, families and anyone in the local community who'd like to connect. We're looking for volunteers to help make these events warm, welcoming and well-run — and we'd love your help.</p>

      <h2>What the role involves</h2>
      <p>Coffee morning volunteers help with setting up the space, welcoming guests, serving refreshments and generally making sure everyone feels at home. No formal care experience is needed — the most important qualities are warmth, patience and a genuine enjoyment of conversation.</p>
      <p>Sessions run from 10am to 12 noon on the second Saturday of each month, at locations across Sydenham and South London. We'll provide full briefing beforehand, and our staff will always be present to support you. Most volunteers tell us the mornings are over before they know it.</p>

      <h2>Get involved</h2>
      <p>If you're interested in volunteering, please get in touch via our contact page or call us directly. We welcome volunteers of all ages and backgrounds — the only requirement is a kind heart and a bit of time. In return, you'll meet some remarkable people and become part of a community that genuinely looks out for each other.</p>
    `,
    category: "Community Events",
    categoryKey: "community",
    featured: false,
    authorName: "Vivienne Ewah",
    authorInitials: "VE",
    authorRole: "Registered Manager",
    readTime: 2,
    publishedAt: new Date("2025-08-05"),
    imageUrl: "/images/blog-0.jpg",
    imageAlt: "Two people chatting warmly over coffee at home",
    tags: ["Community", "Volunteering", "Events"],
  },
  {
    slug: "funding-your-care-a-plain-english-guide",
    title: "Funding your care: a plain-English guide",
    excerpt: "Local authority support, NHS funding and private arrangements explained — without the jargon.",
    content: `
      <p class="lede">The landscape of care funding in England is genuinely complex — and navigating it at a stressful time in your life can feel overwhelming. This guide aims to explain the main options clearly, without the jargon, so you can have more informed conversations with your local authority, GP and care provider.</p>

      <h2>Local authority funding</h2>
      <p>If you have care needs, your local council has a legal duty to carry out a care needs assessment — this is free and separate from any financial assessment. If the assessment identifies eligible needs, the council will then carry out a means test to determine how much they'll contribute to the cost of your care. The upper capital limit (above which you fund your own care) is currently £23,250 in England.</p>
      <p>If the council does contribute, you'll typically receive a personal budget — the amount they'll pay toward your care. You can take this as a direct payment, giving you greater flexibility to choose your own provider, or ask the council to arrange care on your behalf.</p>

      <h2>NHS Continuing Healthcare</h2>
      <p>NHS Continuing Healthcare (CHC) is a package of care arranged and funded entirely by the NHS for adults with complex medical needs. It's not means-tested — eligibility is based entirely on the nature and complexity of your health needs. Many people who could benefit from CHC aren't aware of it, or have been assessed incorrectly. If you think this might apply to you or a family member, ask your GP or care coordinator to refer for a formal assessment.</p>
    `,
    category: "Supported Living Advice",
    categoryKey: "advice",
    featured: false,
    authorName: "Rilindis Njotu",
    authorInitials: "RN",
    authorRole: "Director",
    readTime: 7,
    publishedAt: new Date("2025-07-14"),
    imageUrl: "/images/blog-1.jpg",
    imageAlt: "A person reading funding information at a table",
    tags: ["Funding", "Local authority", "NHS", "Care planning"],
  },
  {
    slug: "reducing-fall-risks-around-the-home",
    title: "Reducing fall risks around the home",
    excerpt: "Practical, low-cost changes that make a real difference to safety and confidence at home.",
    content: `
      <p class="lede">Falls are the leading cause of injury-related hospital admissions among adults over 65 in the UK — and the majority happen at home, often in familiar spaces where people have stopped noticing the hazards. The good news is that most fall risks can be significantly reduced with relatively simple changes.</p>

      <h2>The most common hazards</h2>
      <p>Loose rugs and mats are among the most frequent causes of trips, particularly in hallways and bathrooms. Securing them with non-slip backing or removing them entirely is one of the easiest improvements you can make. Clutter on floors — especially on stairs — is another simple fix that makes an immediate difference.</p>
      <p>Lighting matters more than most people realise. Poor lighting at night — on the path to the bathroom, for instance — is a significant fall risk. Plug-in night lights, motion-activated lights and brighter bulbs in key areas are all worth considering. Make sure light switches are easy to reach from the bed.</p>

      <h2>Bathroom safety</h2>
      <p>The bathroom is where falls most often happen. Grab rails beside the toilet and in the shower or bath area can dramatically reduce the risk — and modern grab rails are far more aesthetically pleasing than the institutional versions of the past. A non-slip bath mat is a basic but essential addition. If stepping over a high bath rim is a challenge, a bath board or a walk-in shower may be worth discussing with an occupational therapist.</p>
    `,
    category: "Care Tips",
    categoryKey: "tips",
    featured: false,
    authorName: "Deborah Brown",
    authorInitials: "DB",
    authorRole: "Director",
    readTime: 3,
    publishedAt: new Date("2025-06-02"),
    imageUrl: "/images/feature-0.jpg",
    imageAlt: "A bright, clutter-free living space at home",
    tags: ["Falls prevention", "Home safety", "Care tips"],
  },
  {
    slug: "celebrating-our-carers-on-care-workers-day",
    title: "Celebrating our carers on Care Workers' Day",
    excerpt: "We say thank you to the people who show up with compassion every day — our remarkable care team.",
    content: `
      <p class="lede">Every year on Care Workers' Day, we take a moment to step back from the busy daily rhythm of our work and say something we mean deeply and don't say often enough: thank you. To our whole team — thank you.</p>

      <h2>What care work really involves</h2>
      <p>Care work is often described in terms of tasks. And yes, there are tasks — medications to administer, meals to prepare, personal care to support. But anyone who has spent time in the sector knows that the heart of the work is relational. It's the conversation during a morning routine that lifts someone's mood for the whole day. It's noticing something's not right before anyone else has. It's showing up consistently, reliably, and with genuine warmth — day after day, in all weathers.</p>
      <p>Our carers do that work every single day. Many of them have been with their clients for years, becoming trusted and familiar presences in people's lives at moments of real vulnerability. That kind of sustained, compassionate commitment deserves far more recognition than it typically receives.</p>

      <h2>Our commitment to our team</h2>
      <p>Recognising carers once a year isn't enough — which is why we're committed to fair pay, real development opportunities, regular supervision and a working culture where staff feel genuinely supported. When our team feels valued, they stay. And when they stay, the people we support benefit from the kind of consistent, familiar care that truly makes a difference.</p>
    `,
    category: "Community Events",
    categoryKey: "community",
    featured: false,
    authorName: "Rilindis Njotu",
    authorInitials: "RN",
    authorRole: "Director",
    readTime: 3,
    publishedAt: new Date("2025-04-15"),
    imageUrl: "/images/feature-4.jpg",
    imageAlt: "A care worker smiling during a home visit",
    tags: ["Care workers", "Community", "Recognition"],
  },
  {
    slug: "what-person-centred-really-means",
    title: "What 'person-centred' really means",
    excerpt: "Beyond the buzzword: how genuinely individualised care is planned, delivered and reviewed.",
    content: `
      <p class="lede">'Person-centred' has become one of those phrases in care that risks losing its meaning through overuse. Every provider claims to deliver it. But what does it actually look like in practice — and how can families and commissioners tell the difference between the real thing and a marketing phrase?</p>

      <h2>Planned with, not for</h2>
      <p>Genuinely person-centred care starts at the assessment stage. A care plan built around a person should involve that person at every step — their preferences, their routines, their goals, their fears. Not just their clinical needs. A CQC-compliant care plan documents what matters to someone, not just what's the matter with them.</p>
      <p>At DeRivian, we ask new clients to tell us about their lives: their interests, their history, the things that make a good day. We ask about food preferences, cultural and religious needs, preferred communication styles, and how they like to spend their time. All of that goes into the care plan — and it's reviewed regularly, because people change.</p>

      <h2>Delivered with flexibility</h2>
      <p>Person-centred care requires carers who can adapt. A visit that runs according to a rigid schedule regardless of how the client is feeling that day isn't truly person-centred. Our carers are trained to read the situation, adjust their approach, and flag anything that needs follow-up. That kind of professional judgement takes time to develop — which is why we invest so heavily in induction, supervision and ongoing training.</p>
    `,
    category: "CQC Updates",
    categoryKey: "cqc",
    featured: false,
    authorName: "Vivienne Ewah",
    authorInitials: "VE",
    authorRole: "Registered Manager",
    readTime: 4,
    publishedAt: new Date("2025-03-08"),
    imageUrl: "/images/blog-2.jpg",
    imageAlt: "A carer and client planning care together on a sofa",
    tags: ["Person-centred", "CQC", "Care planning", "Quality"],
  },
]

async function main() {
  console.log("Seeding blog posts...")
  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    })
    console.log(`  ✓ ${post.title}`)
  }
  console.log(`Done. ${posts.length} posts seeded.`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
