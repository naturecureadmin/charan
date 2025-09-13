import type { Service, Testimonial, FAQ, BlogPost } from '../types';

export const services: Service[] = [
  {
    id: 'functional-medicine',
    title: 'Functional Medicine',
    description: 'Root cause analysis and personalized treatment protocols for optimal health',
    icon: 'dna',
    details: {
      title: 'Functional Medicine',
      content: `
        <h3 class="text-xl font-semibold text-green-800 mb-4">What is Functional Medicine?</h3>
        <p class="mb-4">Functional medicine is a systems biology–based approach that focuses on identifying and addressing the root cause of disease. It treats the whole person, not just the disease.</p>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Our Approach</h3>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Comprehensive health history and assessment</li>
          <li>Advanced laboratory testing</li>
          <li>Personalized treatment protocols</li>
          <li>Lifestyle and nutritional interventions</li>
          <li>Ongoing monitoring and adjustment</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Conditions We Treat</h3>
        <p class="mb-4">Autoimmune disorders, digestive issues, hormonal imbalances, chronic fatigue, metabolic disorders, and more.</p>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Benefits</h3>
        <p class="mb-6">Addresses root causes, personalized treatment, improved overall health, reduced medication dependency, and long-term wellness.</p>
      `,
      faqs: [
        {
          question: "How is functional medicine different from conventional medicine?",
          answer: "Functional medicine focuses on root causes rather than symptoms, uses a systems approach, and emphasizes prevention and personalized treatment plans."
        },
        {
          question: "What conditions can functional medicine treat?",
          answer: "We treat autoimmune disorders, digestive issues, hormonal imbalances, chronic fatigue, diabetes, thyroid disorders, and many chronic conditions."
        },
        {
          question: "How long does functional medicine treatment take?",
          answer: "Treatment duration varies by condition and individual response. Most patients see improvements within 3-6 months, with optimal results in 6-12 months."
        },
        {
          question: "What tests are involved in functional medicine?",
          answer: "We use comprehensive lab panels including nutrient analysis, hormone testing, food sensitivity tests, gut microbiome analysis, and toxicity assessments."
        },
        {
          question: "Is functional medicine safe?",
          answer: "Yes, functional medicine is very safe as it focuses on natural healing methods, lifestyle changes, and targeted supplementation with minimal side effects."
        }
      ]
    }
  },
  {
    id: 'ozone-therapy',
    title: 'Ozone Therapy',
    description: 'Advanced oxidative therapy for cellular regeneration and immune enhancement',
    icon: 'wind',
    details: {
      title: 'Ozone Therapy',
      content: `
        <h3 class="text-xl font-semibold text-green-800 mb-4">What is Ozone Therapy?</h3>
        <p class="mb-4">Ozone therapy uses ozone gas (O3) to treat various medical conditions by improving oxygen utilization at the cellular level and enhancing the immune system.</p>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Treatment Methods</h3>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Ozone insufflation</li>
          <li>Ozonated water therapy</li>
          <li>Ozone sauna treatments</li>
          <li>Ozonated oil applications</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Benefits</h3>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Enhanced immune system function</li>
          <li>Improved cellular oxygenation</li>
          <li>Antimicrobial properties</li>
          <li>Improved circulation</li>
          <li>Anti-aging effects</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Conditions Treated</h3>
        <p class="mb-6">Chronic infections, immune deficiencies, cardiovascular conditions, diabetes, and wound healing.</p>
      `,
      faqs: [
        {
          question: "Is ozone therapy safe?",
          answer: "Yes, when administered by qualified professionals like Dr. Nanjeshgowda, ozone therapy is safe and well-tolerated with minimal side effects."
        },
        {
          question: "How many ozone therapy sessions do I need?",
          answer: "Treatment plans vary by condition. Typically, patients receive 6-12 sessions over 2-3 months, with maintenance sessions as needed."
        },
        {
          question: "What can I expect during an ozone therapy session?",
          answer: "Sessions are comfortable and typically last 30-60 minutes. You may feel energized and experience improved well-being after treatment."
        },
        {
          question: "Can ozone therapy be combined with other treatments?",
          answer: "Yes, ozone therapy works excellently in combination with functional medicine, acupuncture, and nutritional therapies for enhanced results."
        },
        {
          question: "Who is a good candidate for ozone therapy?",
          answer: "Most people can benefit from ozone therapy, especially those with chronic infections, immune issues, or seeking enhanced wellness and vitality."
        }
      ]
    }
  },
  {
    id: 'acupuncture',
    title: 'Advanced Medical Acupuncture',
    description: 'Precise meridian therapy combining traditional wisdom with modern techniques',
    icon: 'target',
    details: {
      title: 'Advanced Medical Acupuncture',
      content: `
        <h3 class="text-xl font-semibold text-green-800 mb-4">Modern Acupuncture Approach</h3>
        <p class="mb-4">Our advanced medical acupuncture combines traditional Chinese medicine principles with modern anatomical and physiological knowledge.</p>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Techniques Used</h3>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Traditional needle acupuncture</li>
          <li>Electroacupuncture</li>
          <li>Auricular acupuncture</li>
          <li>Scalp acupuncture</li>
          <li>Trigger point acupuncture</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Conditions Treated</h3>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Chronic pain conditions</li>
          <li>Neurological disorders</li>
          <li>Digestive issues</li>
          <li>Stress and anxiety</li>
          <li>Hormonal imbalances</li>
          <li>Addiction recovery</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Treatment Benefits</h3>
        <p class="mb-6">Natural pain relief, improved energy flow, reduced stress, enhanced healing, and minimal side effects.</p>
      `,
      faqs: [
        {
          question: "Does acupuncture hurt?",
          answer: "Most patients experience minimal discomfort. The needles are very thin, and many people find the treatment relaxing and therapeutic."
        },
        {
          question: "How quickly will I see results from acupuncture?",
          answer: "Some patients feel improvement after the first session, while others may need 4-6 treatments. Chronic conditions typically require longer treatment courses."
        },
        {
          question: "How long do acupuncture sessions last?",
          answer: "Initial consultations take 60-90 minutes, while follow-up sessions typically last 45-60 minutes including needle retention time."
        },
        {
          question: "Can acupuncture help with chronic pain?",
          answer: "Yes, acupuncture is highly effective for chronic pain conditions including arthritis, back pain, migraines, and fibromyalgia."
        },
        {
          question: "Are the acupuncture needles sterile and safe?",
          answer: "Absolutely. We use only single-use, sterile, disposable needles and follow strict safety protocols to ensure patient safety."
        }
      ]
    }
  },
  {
    id: 'diet-consultation',
    title: 'Personalized Diet Consultation',
    description: 'Customized nutrition plans based on your unique metabolic profile',
    icon: 'apple',
    details: {
      title: 'Personalized Diet Consultation',
      content: `
        <h3 class="text-xl font-semibold text-green-800 mb-4">Individualized Nutrition Plans</h3>
        <p class="mb-4">Our personalized diet consultations are based on your unique metabolic profile, health conditions, and lifestyle factors.</p>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Assessment Process</h3>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Comprehensive nutritional assessment</li>
          <li>Food sensitivity testing</li>
          <li>Metabolic typing analysis</li>
          <li>Lifestyle and preference evaluation</li>
          <li>Health goal identification</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">What You'll Receive</h3>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Customized meal plans</li>
          <li>Supplement recommendations</li>
          <li>Shopping lists and recipes</li>
          <li>Regular follow-up consultations</li>
          <li>Ongoing support and adjustments</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Specialized Programs</h3>
        <p class="mb-6">Weight management, diabetes control, digestive health, anti-inflammatory diets, and detoxification protocols.</p>
      `,
      faqs: [
        {
          question: "How is your diet consultation different from generic diet plans?",
          answer: "Our plans are completely personalized based on your metabolic type, food sensitivities, health conditions, and lifestyle preferences."
        },
        {
          question: "Do you provide meal plans and recipes?",
          answer: "Yes, you'll receive detailed meal plans, shopping lists, and easy-to-follow recipes tailored to your specific needs and preferences."
        },
        {
          question: "Can you help with specific health conditions through diet?",
          answer: "Absolutely. We create specialized nutrition protocols for diabetes, PCOS, thyroid disorders, digestive issues, and autoimmune conditions."
        },
        {
          question: "How often will I need follow-up consultations?",
          answer: "Initially, we recommend follow-ups every 2-4 weeks, then monthly as you progress. This ensures optimal results and necessary adjustments."
        },
        {
          question: "Do you provide supplement recommendations?",
          answer: "Yes, based on your nutritional assessment and health goals, we provide targeted supplement recommendations to support your wellness journey."
        }
      ]
    }
  },
  {
    id: 'disease-remission',
    title: 'Disease Remission Programmes',
    description: 'Comprehensive protocols for metabolic conditions and chronic diseases',
    icon: 'activity',
    details: {
      title: 'Disease Remission Programmes',
      content: `
        <h3 class="text-xl font-semibold text-green-800 mb-4">Comprehensive Remission Protocols</h3>
        <p class="mb-4">Our disease remission programmes focus on reversing metabolic conditions through intensive, personalized treatment protocols.</p>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Conditions We Address</h3>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Type 2 Diabetes</li>
          <li>Hypertension</li>
          <li>Thyroid disorders</li>
          <li>Metabolic syndrome</li>
          <li>PCOS/PCOD</li>
          <li>Fatty liver disease</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Treatment Approach</h3>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Intensive lifestyle modification</li>
          <li>Targeted supplementation</li>
          <li>Stress management techniques</li>
          <li>Regular monitoring and adjustment</li>
          <li>Patient education and support</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-green-800 mb-4">Success Metrics</h3>
        <p class="mb-6">98% success rate in achieving significant improvement or remission in metabolic conditions within 6-12 months of treatment.</p>
      `,
      faqs: [
        {
          question: "Can diabetes really be reversed naturally?",
          answer: "Yes, Type 2 diabetes can often be reversed through our comprehensive approach combining diet, lifestyle changes, and targeted interventions."
        },
        {
          question: "How long does the disease remission program take?",
          answer: "Most patients see significant improvements within 3-6 months, with optimal results achieved in 6-12 months depending on the condition."
        },
        {
          question: "Will I need to stop my current medications?",
          answer: "Medication adjustments are made gradually and safely under medical supervision as your health improves. Never stop medications without guidance."
        },
        {
          question: "What is your success rate with disease remission?",
          answer: "We have a 98% success rate in achieving significant improvement or complete remission in metabolic conditions like diabetes and hypertension."
        },
        {
          question: "Is the disease remission program suitable for everyone?",
          answer: "Most people with metabolic conditions are good candidates. We conduct thorough assessments to ensure the program is right for you."
        }
      ]
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Padmapriya Belthangadi',
    initials: 'PB',
    condition: 'Multiple Symptoms Recovery',
    text: "I struggled with burning feet, fatigue, poor appetite, disturbed sleep, and hypothyroidism. Dr. Nanjesh listened patiently and explained functional medicine clearly. With his supplements and guidance, I've recovered from almost all symptoms. I feel energetic, sleep well, and my mindset has completely shifted. Today I say with confidence 'I can do everything.'"
  },
  {
    id: '2',
    name: 'Samskruthi Jain',
    initials: 'SJ',
    condition: 'Anemia & Hormonal Issues',
    text: "Dr. Nanjesh treated my leukorrhea, dysmenorrhea, anemia, and chronic fatigue with evidence-based naturopathy. His attention to detail is rare. Within 3 months, my anemia resolved without iron supplements, leukorrhea was cured, and dysmenorrhea improved significantly. His holistic approach and regular follow-ups are deeply inspiring."
  },
  {
    id: '3',
    name: 'Chaya Sunil',
    initials: 'CS',
    condition: 'Digestive Health',
    text: "Dr. Nanjesh's gentle, no-rush approach using simple natural methods aligned perfectly with my daily life. My digestion and stress levels have notably improved thanks to his tailored guidance. I feel more resilient and confident in staying well."
  },
  {
    id: '4',
    name: 'Sunil Kumar',
    initials: 'SK',
    condition: 'Sleep & Energy Issues',
    text: "Dr. Nanjesh took time to really listen before building a root-cause treatment plan combining diet, herbal support, and lifestyle shifts. Within weeks, my sleep quality and energy improved significantly. I now have a customized, preventative roadmap for my health."
  },
  {
    id: '5',
    name: 'Nikhil Jain C S',
    initials: 'NJ',
    condition: 'Nutritional Deficiencies',
    text: "Dr. Nanjesh included tailored vitamin D and B12 supplements that boosted my energy and mood noticeably. He recommended thorough blood testing when he suspected underlying issues, ensuring we caught potential problems early. I appreciate his proactive, root-cause focus."
  },
  {
    id: '6',
    name: 'Ananya Gowda',
    initials: 'AG',
    condition: 'Urticaria & Post-Dengue Recovery',
    text: "I had a skin condition Urticaria since childhood that worsened after dengue. Dr. Nanjesh took time to look at the root causes using functional medicine. His treatment plan was holistic and personalized. Within weeks, I started noticing significant improvements. Functional medicine with the right practitioner can be life changing - for me, it absolutely was!"
  },
  {
    id: '7',
    name: 'Shrusti N Murthy',
    initials: 'SM',
    condition: 'PCOS Recovery',
    text: "After struggling with PCOS for 2 long years, I finally found relief under Dr. Nanjeshgowda's expert care. In just 3 months, he not only understood my condition but also tailored a treatment plan that worked wonders for me. His professionalism, compassion, and dedication are truly commendable. I'm now on the path to a healthier and happier life."
  },
  {
    id: '8',
    name: 'Dr. Shishira Rayee',
    initials: 'SR',
    condition: 'Migraine Relief',
    text: "I had been struggling with migraines for a long time until I consulted Dr. Nanjesh. From the first appointment, I was impressed by his thoughtful approach and genuine care. He suggested a treatment plan along with specific supplements. It's been over two years since that consultation, and I haven't had a single migraine since. His expertise and natural, holistic approach made all the difference."
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is functional medicine and how is it different from conventional medicine?',
    answer: 'Functional medicine focuses on identifying and addressing the root causes of disease rather than just treating symptoms. It takes a systems-oriented approach and engages both patient and practitioner in a therapeutic partnership.'
  },
  {
    id: '2',
    question: 'Is ozone therapy safe and what conditions can it treat?',
    answer: 'Ozone therapy, when administered by qualified professionals, is safe and effective. It can help with immune system enhancement, chronic infections, cardiovascular health, and cellular regeneration.'
  },
  {
    id: '3',
    question: 'How long does it take to see results with integrative treatments?',
    answer: 'Results vary depending on the condition and individual response. Some patients notice improvements within weeks, while chronic conditions may require 3-6 months of consistent treatment for significant changes.'
  },
  {
    id: '4',
    question: 'What makes your approach different from other healthcare providers?',
    answer: 'We combine the best of modern medical science with traditional healing wisdom, focusing on root causes rather than symptoms. Our personalized protocols address the whole person, not just the disease.'
  },
  {
    id: '5',
    question: 'Can integrative medicine help with chronic diseases like diabetes and hypertension?',
    answer: 'Yes, our disease remission programmes have shown excellent results in managing and reversing metabolic conditions like diabetes, hypertension, and thyroid disorders through comprehensive lifestyle and treatment protocols.'
  },
  {
    id: '6',
    question: 'Do you provide online consultations?',
    answer: 'Yes, we offer comprehensive online consultations for initial assessments and follow-ups. However, certain treatments like ozone therapy and acupuncture require in-person visits.'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    icon: 'heart',
    date: 'March 15, 2024',
    title: 'Understanding Functional Medicine: A Holistic Approach to Health',
    excerpt: 'Discover how functional medicine addresses root causes rather than symptoms, offering personalized treatment plans for optimal wellness.'
  },
  {
    id: '2',
    icon: 'leaf',
    date: 'March 10, 2024',
    title: 'The Science Behind Ozone Therapy: Cellular Regeneration',
    excerpt: 'Explore the mechanisms of ozone therapy and its role in enhancing immune function and promoting natural healing processes.'
  },
  {
    id: '3',
    icon: 'activity',
    date: 'March 5, 2024',
    title: 'Reversing Diabetes Naturally: Success Stories and Protocols',
    excerpt: 'Learn about our comprehensive approach to diabetes remission through lifestyle modifications and targeted interventions.'
  },
  {
    id: '4',
    icon: 'brain',
    date: 'February 28, 2024',
    title: 'Acupuncture for Chronic Pain: Modern Applications of Ancient Wisdom',
    excerpt: 'Understanding how medical acupuncture combines traditional techniques with modern anatomical knowledge for pain management.'
  },
  {
    id: '5',
    icon: 'apple',
    date: 'February 22, 2024',
    title: 'Personalized Nutrition: Beyond One-Size-Fits-All Diets',
    excerpt: 'Why individualized nutrition plans based on metabolic typing and food sensitivities are more effective than generic diets.'
  },
  {
    id: '6',
    icon: 'shield',
    date: 'February 18, 2024',
    title: 'Boosting Immunity Naturally: Integrative Approaches',
    excerpt: 'Comprehensive strategies for enhancing immune function through nutrition, lifestyle changes, and targeted therapies.'
  }
];