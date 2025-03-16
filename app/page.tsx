'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  ONGOING_STUDIES,
} from './data'

// Define the WorkExperience type locally since it's not exported from data.ts
type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

// Componente para projetos com imagens estáticas
type ProjectImageProps = {
  src: string
  alt: string
}

function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <img
          src={src}
          alt={alt}
          className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <img
            src={src}
            alt={alt}
            className="aspect-video h-[50vh] w-full rounded-xl object-contain md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <a
      href={link}
      className="group relative inline-flex items-center gap-[1px] rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-black transition-colors duration-200 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 ml-1"
      >
        <path
          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-20 max-w-4xl pt-8 pl-4"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="mb-10">
          <motion.h1 
            className="text-base font-medium mb-1 text-zinc-800 dark:text-zinc-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-600 bg-clip-text text-transparent dark:from-zinc-200 dark:via-zinc-300 dark:to-zinc-400">
              Ricardo Félix Morais
            </span>
          </motion.h1>
          <div className="mb-8 flex flex-col">
            <motion.h2 
              className="text-sm text-zinc-600 dark:text-zinc-400"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ x: 3, transition: { duration: 0.2 } }}
            >
              Medical Doctor
            </motion.h2>
            <motion.h2 
              className="text-sm text-zinc-600 dark:text-zinc-400"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ x: 3, transition: { duration: 0.2 } }}
            >
              AI Engineer
            </motion.h2>
          </div>
          <div className="text-zinc-600 dark:text-zinc-400 text-base max-w-lg">
            <p>Focusing on exploring synergies between the Human Brain and AI. Bridging the gap between Human Intelligence and Artificial Intelligence.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="mt-10"
      >
        <h3 className="mb-3 text-lg font-medium">Projects</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {PROJECTS.map((project, index) => (
            <div key={project.name} className="space-y-2 group">
              <div className="relative rounded-xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                {project.type === 'video' && project.video ? (
                  <ProjectVideo src={project.video} />
                ) : project.type === 'image' && project.image ? (
                  <ProjectImage src={project.image} alt={project.imageAlt || project.name} />
                ) : null}
              </div>
              <div>
                <a
                  className="font-medium text-base text-zinc-900 dark:text-zinc-50 whitespace-nowrap"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                </a>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {[
            WORK_EXPERIENCE.find(job => job.id === 'work1'), // Head of Neuro Intervention
            WORK_EXPERIENCE.find(job => job.id === 'work2'), // São João
            WORK_EXPERIENCE.find(job => job.id === 'work6'), // Researcher Team Leader - moved here
            WORK_EXPERIENCE.find(job => job.id === 'work3'), // Coimbra
            WORK_EXPERIENCE.find(job => job.id === 'work4'), // Clinical Research Training
            WORK_EXPERIENCE.find(job => job.id === 'work5'), // Fellowship
          ].filter((job): job is WorkExperience => job !== undefined)
           .map((job) => (
            <a
              className="relative overflow-hidden rounded-xl bg-white p-4 ring-1 ring-zinc-100 transition-all duration-300 hover:bg-zinc-50 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:bg-zinc-800"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-100">
                    {job.title}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {job.id === 'work6' 
                      ? 'Centre for innovative biomedicine and biotechnology' 
                      : job.id === 'work5' 
                        ? 'Hopital Erasme'
                        : job.company.split(',')[0]}
                  </p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 text-right whitespace-nowrap">
                  {job.start} - {job.end}
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Ongoing Research</h3>
        <div className="flex flex-col space-y-2">
          {BLOG_POSTS.filter(post => 
            post.uid === 'sci-3' || post.uid === 'sci-4' || post.uid === 'sci-6'
          ).map((post) => {
            // Modified descriptions to fit on one line and remove parenthetical content
            let description = post.description;
            if (post.uid === 'sci-3') {
              description = "Neuroimaging Assessment Using High-Performance Computing";
            } else if (post.uid === 'sci-4') {
              description = "Brain Volumetric and Connectivity Biomarkers in Hypertension Patients";
            } else if (post.uid === 'sci-6') {
              description = "Investigating blood-brain barrier permeability in Alzheimer's disease progression";
            }
            
            return (
              <div
                key={post.uid}
                className="block rounded-xl p-3 transition-colors duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                data-id={post.uid}
              >
                <p className="text-base font-medium text-zinc-900 dark:text-zinc-100 whitespace-nowrap mb-1">
                  {description}
                </p>
                <h4 className="text-sm text-zinc-600 dark:text-zinc-500">
                  {post.title}
                </h4>
              </div>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Ongoing Studies</h3>
        <div className="flex flex-col space-y-2">
          {ONGOING_STUDIES.map((study) => (
            <div
              className="relative overflow-hidden rounded-xl bg-white p-4 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800"
              key={study.id}
            >
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-100">
                    {study.degree} in {study.field}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {study.institution}
                  </p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 text-right">
                  {study.start} - {study.end}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="pb-2"
      >
        <h3 className="mb-2 text-lg font-medium">Connect</h3>
        <p className="mb-4 text-base text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at <a href={`mailto:${EMAIL}`} className="underline hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors duration-300">{EMAIL}</a>
        </p>
        <div className="flex flex-row items-center gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.link}
              className="rounded-full bg-zinc-100 px-4 py-2 text-xs text-black transition-all duration-300 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label} ↗
            </a>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
