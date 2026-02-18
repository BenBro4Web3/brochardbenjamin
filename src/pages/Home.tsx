import { motion } from 'framer-motion';
import { ExternalLink, Mail, Linkedin, ArrowDown, Lock, ChevronRight } from 'lucide-react';
import {
  profile,
  stats,
  experiences,
  skillCategories,
  publicProjects,
  internalProjects,
} from '@/data/profile';
import { SEOHead } from '@/components/seo/SEOHead';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Home() {
  return (
    <>
      <SEOHead
        title="Benjamin Brochard — Directeur de Projets IoT & Digital"
        description={profile.description}
      />

      {/* ===== HERO ===== */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 hero-glow" />

        <div className="relative z-10">
          <motion.p
            className="text-sm text-primary font-mono tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile.name}
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {profile.title}{' '}
            <span className="gradient-text">{profile.titleHighlight}</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {profile.subtitle}
          </motion.p>

          <motion.p
            className="mt-4 text-sm md:text-base text-muted-foreground/70 max-w-xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {profile.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Me contacter
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              LinkedIn
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 flex flex-wrap gap-8 md:gap-12 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1 max-w-[100px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="#parcours" aria-label="Scroll down">
            <ArrowDown className="size-5 text-muted-foreground animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* ===== PARCOURS ===== */}
      <section id="parcours" className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-sm tracking-widest uppercase text-primary text-center mb-2 font-mono"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            Parcours
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            Expériences clés
          </motion.h3>

          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border" />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative pl-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                {/* Dot */}
                <div className="absolute left-0 top-3 w-[15px] h-[15px] rounded-full bg-primary/20 border-2 border-primary" />

                {/* Card */}
                <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="text-xs text-primary font-mono bg-primary/10 px-2.5 py-1 rounded">
                    {exp.period}
                  </span>
                  <h4 className="text-lg font-semibold mt-3">{exp.company}</h4>
                  <p className="text-sm text-primary/80">{exp.role}</p>
                  <p className="text-sm text-muted-foreground font-light mt-3">
                    {exp.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <ChevronRight className="size-3 text-primary shrink-0 mt-1" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPETENCES ===== */}
      <section id="competences" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-sm tracking-widest uppercase text-primary text-center mb-2 font-mono"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            Expertise
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            Compétences & outils
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.category}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h4 className="font-semibold">{cat.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJETS ===== */}
      <section id="projets" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-sm tracking-widest uppercase text-primary text-center mb-2 font-mono"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            Réalisations
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            Projets publics
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {publicProjects.map((project, i) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-xl border border-border hover:border-primary/30 transition-all overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                {/* Gradient header */}
                <div
                  className="h-36 relative overflow-hidden"
                  style={{ background: project.gradient }}
                >
                  {/* Abstract decoration */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
                  <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-white/5" />
                  <div className="absolute right-6 top-6 w-16 h-16 rounded-lg bg-white/5 rotate-12" />

                  {/* Domain */}
                  <div className="absolute bottom-4 left-6">
                    <p className="text-white/90 text-sm font-mono">
                      {project.url?.replace('https://', '').replace(/\/$/, '')}
                    </p>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="size-4 text-white/80" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground font-light mt-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Internal Projects */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center mt-24 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            Projets internes
          </motion.h3>
          <motion.p
            className="text-center text-muted-foreground text-sm mb-12 max-w-lg mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            Outils et automatisations développés en interne. Non publiables
            (données clients, propriété intellectuelle).
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {internalProjects.map((project, i) => (
              <motion.div
                key={project.id}
                className="bg-card rounded-xl border border-border overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                {/* Mini gradient accent */}
                <div
                  className="h-1.5"
                  style={{ background: project.gradient }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="size-3.5 text-muted-foreground" />
                    <h4 className="text-base font-semibold">{project.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground font-light mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-sm tracking-widest uppercase text-primary mb-2 font-mono"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            Contact
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            Travaillons ensemble
          </motion.h3>
          <motion.p
            className="text-muted-foreground font-light mb-2 max-w-lg mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          >
            {profile.objective}
          </motion.p>
          <motion.p
            className="text-muted-foreground text-sm mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
          >
            N'hésitez pas à me contacter pour discuter de vos projets ou
            opportunités.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
          >
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
