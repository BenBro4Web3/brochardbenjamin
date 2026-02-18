import { motion } from 'framer-motion';
import { ExternalLink, Mail, Linkedin, ArrowDown, Lock, BarChart3 } from 'lucide-react';
import {
  profile,
  skills,
  services,
  publicProjects,
  internalProjects,
  metrics,
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
        title="Benjamin Brochard — Gestion de projet & Automatisation"
        description={profile.description}
      />

      {/* ===== HERO ===== */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative"
      >
        {/* Avatar placeholder */}
        <motion.div
          className="w-28 h-28 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-4xl mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          BB
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {profile.title}{' '}
          <span className="text-primary">{profile.titleHighlight}</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {profile.description}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
            Voir LinkedIn
          </a>
        </motion.div>

        {/* Skills bar */}
        <motion.div
          className="mt-16 space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            Outils & compétences
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm"
              >
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#services" aria-label="Scroll down">
            <ArrowDown className="size-5 text-muted-foreground animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-sm tracking-widest uppercase text-primary text-center mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            Ce que j'apporte
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            Mes compétences
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-sm tracking-widest uppercase text-primary text-center mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            Projets
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            Réalisations publiques
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {publicProjects.map((project, i) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                  <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
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
              </motion.a>
            ))}
          </div>

          {/* Internal Projects */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center mt-20 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            Projets internes / confidentiels
          </motion.h3>
          <motion.p
            className="text-center text-muted-foreground text-sm mb-12 max-w-lg mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            Certaines réalisations ne sont pas publiables (données, clients,
            propriété), mais je les documente.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {internalProjects.map((project, i) => (
              <motion.div
                key={project.id}
                className="p-6 bg-card rounded-xl border border-border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="size-4 text-muted-foreground" />
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== METRICS ===== */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-sm tracking-widest uppercase text-primary text-center mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            Métriques
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            Reporting & dashboards
          </motion.h3>

          {metrics.map((metric, i) => (
            <motion.a
              key={metric.title}
              href={metric.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all max-w-xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 2}
              variants={fadeUp}
            >
              <BarChart3 className="size-8 text-primary shrink-0" />
              <div>
                <h4 className="font-semibold group-hover:text-primary transition-colors">
                  {metric.title}
                </h4>
                <p className="text-sm text-muted-foreground font-light">
                  {metric.description}
                </p>
              </div>
              <ExternalLink className="size-4 text-muted-foreground shrink-0 ml-auto" />
            </motion.a>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-sm tracking-widest uppercase text-primary mb-2"
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
            className="text-muted-foreground font-light mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          >
            {profile.objective}
          </motion.p>
          <motion.p
            className="text-muted-foreground text-sm mb-8"
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
