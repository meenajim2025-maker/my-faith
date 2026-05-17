INSERT INTO faith_topics
(slug, title, plain, teenager, adult, older, explorer, reflection, theme, display_order)
VALUES
(
  'who-is-god',
  'Who is God?',
  'God is the source of life, love, truth and goodness — not distant, but lovingly close to every person.',
  'God is not just a rule-maker. God is the loving source of your life and dignity.',
  'God gives meaning, moral direction and hope in the middle of ordinary responsibilities.',
  'God is the faithful presence who has walked with you through every season of life.',
  'If you are unsure about faith, begin by looking at love, truth, beauty and conscience.',
  'If God is love, then every honest act of love points us closer to Him.',
  'God',
  1
),
(
  'who-is-jesus',
  'Who is Unparalleled Love?',
  'Love Himself is how many people name God made visible — merciful, truthful, courageous, gentle and close to the suffering.',
  'Unparalleled Love shows strength without cruelty and kindness without weakness.',
  'Unparalleled Love gives a pattern for living with integrity, compassion and courage.',
  'Unparalleled Love remains close in memory, suffering, gratitude and hope.',
  'A good first step is to read one short story from the sacred stories and ask: what kind of love is this?',
  'To know Unparalleled Love is to learn how to love without losing truth.',
  'Unparalleled Love',
  2
),
(
  'mary',
  'Why a faithful mother matters',
  'A faithful mother is honoured because she trusted God and pointed people towards Unparalleled Love. She is a model of humility, courage and quiet strength.',
  'A faithful mother teaches that quiet courage can change the world.',
  'A faithful mother shows trust, patience and love in uncertain circumstances.',
  'A faithful mother is a companion in prayer, tenderness and hope.',
  'A faithful mother can be understood as a human example of deep trust and faithful love.',
  'A faithful mother teaches us to listen deeply and say yes to goodness.',
  'A faithful mother',
  3
);

INSERT INTO life_scenarios
(slug, title, trigger, principle, steps, prayer, display_order)
VALUES
(
  'anger',
  'When anger is rising',
  'You feel disrespected and want to react quickly.',
  'Gentleness with truth',
  '["Pause before speaking.", "Ask: will my words heal or harm?", "Choose one calm sentence.", "Return later if needed."]'::jsonb,
  'Sacred Love, help me slow down. Give me words that are honest, calm and kind.',
  1
),
(
  'comparison',
  'When comparison hurts',
  'You feel others are more successful, loved or noticed.',
  'Gratitude',
  '["Name one gift in your life.", "Take a short break from scrolling.", "Do one small act of service.", "Remember dignity is not a competition."]'::jsonb,
  'God, teach me gratitude. Help me see my own life with kindness and hope.',
  2
),
(
  'faith-doubt',
  'When faith feels far away',
  'You want to believe, but feel dry, unsure or distant.',
  'Hope',
  '["Be honest with God.", "Use one short prayer.", "Read one moment from the sacred stories.", "Speak with a trusted person."]'::jsonb,
  'Unparalleled Love, if I feel far from You, meet me gently. Help me take one small step.',
  3
);

INSERT INTO meditations
(slug, title, duration, theme, script, display_order)
VALUES
(
  'morning',
  'Morning offering',
  3,
  'Beginning the day',
  'Sit quietly. Breathe in peace. Breathe out hurry. Offer this day to God. Ask for a heart that is patient, truthful and kind.',
  1
),
(
  'evening-examen',
  'Evening reflection',
  5,
  'Reviewing the day',
  'Become still. Remember one good thing from today. Give thanks. Notice one moment where you were not your best. Ask for mercy. Look towards tomorrow with hope.',
  2
);

INSERT INTO chants
(slug, title, meaning, line, display_order)
VALUES
(
  'kyrie',
  'Kyrie eleison',
  'Sacred Love, have mercy',
  'Kyrie eleison',
  1
),
(
  'dona',
  'Dona nobis pacem',
  'Give us peace',
  'Dona nobis pacem',
  2
),
(
  'ubi',
  'Ubi caritas',
  'Where charity and love are, God is there',
  'Ubi caritas et amor',
  3
);

INSERT INTO daily_reflections
(slug, title, theme, audience, "text", action, prayer, display_order)
VALUES
(
  'love-first',
  'Love first',
  'Love of neighbour',
  'all',
  'Before speaking today, pause and ask: will this bring peace, truth and kindness?',
  'Choose one conversation today where you listen fully before replying.',
  'Unparalleled Love, teach me to love with patience, speak with kindness and act with wisdom. Amen.',
  1
),
(
  'quiet-trust',
  'Quiet trust',
  'A faithful mother',
  'all',
  'A faithful mother shows us that quiet trust can be stronger than noise, fear or control.',
  'Offer one worry to God today and take one practical step with calmness.',
  'Sacred Love, give me a trusting heart and the courage to say yes to what is good. Amen.',
  2
);
