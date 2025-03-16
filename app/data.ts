type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Head of Neuro Intervention Unit',
    description:
      'Leading specialized team for advanced neurointerventional procedures at Hospital Boa Nova.',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Head of BCI and Neuroimaging AI Unit',
    description: 'Research on brain imaging techniques and development of brain-computer interfaces.',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Hospital Boa Nova Trofa Saúde, Porto, Portugal',
    title: 'Head of Neuro Intervention Unit',
    start: '2019',
    end: 'Present',
    link: '#',
    id: 'work1',
  },
  {
    company: 'Centro Hospitalar Universitário São João, Porto, Portugal',
    title: 'Assistant Physician, Neuroradiology Department',
    start: '2018',
    end: 'Present',
    link: '#',
    id: 'work2',
  },
  {
    company: 'Centro Hospitalar e Universitário de Coimbra, Coimbra, Portugal',
    title: 'Assistant Physician, Neuroradiology Department',
    start: '2017',
    end: '2018',
    link: '#',
    id: 'work3',
  },
  {
    company: 'Harvard Medical School',
    title: 'Clinical Scholars Research Training Program',
    start: '2017',
    end: '2019',
    link: '#',
    id: 'work4',
  },
  {
    company: 'Hopital Erasme',
    title: 'Fellowship in Endovascular Neurosurgery',
    start: '2014',
    end: '2016',
    link: '#',
    id: 'work5',
  },
  {
    company: 'Centre for innovative biomedicine and biotechnology (CIBB), Coimbra, Portugal',
    title: 'Researcher, Neuroimaging Team Leader',
    start: '2021',
    end: 'Present',
    link: '#',
    id: 'work6',
  },
]

export const ONGOING_STUDIES = [
  {
    institution: 'Universidade de Coimbra, Coimbra, Portugal',
    degree: 'Ph.D.',
    field: 'Medicine',
    start: '2020',
    end: '2025 (expected)',
    id: 'edu1',
  },
  {
    institution: 'Universidade do Porto, Porto, Portugal',
    degree: 'Bachelor',
    field: 'Engineering and Computer Science',
    start: '2021',
    end: 'Present',
    id: 'edu2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Neural Correlates of Consciousness and Artificial Intelligence',
    description: 'Research on parallel processing mechanisms in human brains and neural networks',
    link: '/scientific-work/neural-correlates-consciousness-ai',
    uid: 'sci-1',
  },
  {
    title: 'Computational Models for Neurological Disorders',
    description: 'Novel AI approaches for early diagnosis of neurodegenerative diseases',
    link: '/scientific-work/computational-models-neurological-disorders',
    uid: 'sci-2',
  },
  {
    title: 'Co-Advisor, PhD Thesis',
    description: 'Distributed Neuroimaging Assessment Using High-Performance Computing to Discover Dementia Biomarkers (INESC TEC, Porto)',
    link: '#',
    uid: 'sci-3',
  },
  {
    title: 'Co-Advisor, Master\'s Thesis',
    description: 'Brain Volumetric and Connectivity Biomarkers in Hypertension Patients (INESC TEC, Porto)',
    link: '#',
    uid: 'sci-4',
  },
  {
    title: 'Co-Advisor, Master\'s Thesis',
    description: 'Evaluation of endovascular treatment results of intracranial aneurysms with the Leo stent (Hospital Erasme, Brussels)',
    link: '#',
    uid: 'sci-5',
  },
  {
    title: 'Alzheimer\'s Permeability Research',
    description: 'Investigating blood-brain barrier permeability in Alzheimer\'s disease progression',
    link: '#',
    uid: 'sci-6',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ricardo-m-2154b16b/',
  }
]

export const EMAIL = 'ricardofelixmorais@gmail.com'
