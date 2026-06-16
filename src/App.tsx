import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Briefcase, GraduationCap, Code, Palette, Printer,
  Trash2, Plus, Upload, Check, Globe, Mail, Phone, MapPin,
  ExternalLink, Languages, Eye, FolderGit,
  Award, ChevronUp, ChevronDown, Copy, FolderPlus, Search,
  Download, RotateCcw, X, Sparkles, LayoutTemplate, Settings2,
  ZoomIn, ZoomOut, Maximize2
} from 'lucide-react';


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  BRAND SVG ICONS (Social Platforms)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const GithubIcon = ({ className = "w-3.5 h-3.5", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', ...style }} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ className = "w-3.5 h-3.5", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', ...style }} fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = ({ className = "w-3.5 h-3.5", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', ...style }} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className = "w-3.5 h-3.5", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', ...style }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsappIcon = ({ className = "w-3.5 h-3.5", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', ...style }} fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.488 1.966 14.022 1.01 11.5 1.01c-5.448 0-9.882 4.372-9.886 9.8.001 1.905.516 3.766 1.493 5.434l-.988 3.61 3.791-.986z" />
  </svg>
);


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  TYPE DEFINITIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

interface ExperienceItem { id: string; company: string; role: string; period: string; desc: string; }
interface EducationItem { id: string; institution: string; degree: string; period: string; desc: string; }
interface ProjectItem { id: string; title: string; desc: string; link: string; }
interface SkillItem { id: string; name: string; level: number; }
interface LanguageItem { id: string; name: string; level: string; }
interface AwardItem { id: string; title: string; issuer: string; period: string; }

interface CVData {
  fullName: string; jobTitle: string; email: string; phone: string;
  location: string; summary: string; website: string;
  github: string; linkedin: string; twitter: string;
  experiences: ExperienceItem[]; educations: EducationItem[];
  projects: ProjectItem[]; skills: SkillItem[];
  languages: LanguageItem[]; awards: AwardItem[];
}

interface SavedProfile {
  id: string; name: string; cvData: CVData; photo: string;
  headerStyle: string; layoutStyle: string; fontPair: string;
  accentColor: string; sectionStyle: string; fontSize: string;
  sectionOrder: string[]; showSectionIcons: boolean; showContactIcons: boolean;
}

type TemplateCategory = 'Minimalist' | 'Modern' | 'Executive' | 'Creative' | 'Academic' | 'Tech' | 'Luxury';

interface TemplatePreset {
  id: string; name: string; category: TemplateCategory;
  headerStyle: string; layoutStyle: string; fontPair: string;
  accentColor: string; sectionStyle: string; fontSize: string;
  description: string;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SAMPLE DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const INITIAL_DATA: CVData = {
  fullName: 'Yazan Saadeh',
  jobTitle: 'Senior Frontend Architect',
  email: 'yazan@example.com',
  phone: '+962 79 000 0000',
  location: 'Amman, Jordan',
  website: 'yazansaadeh.dev',
  github: 'github.com/yazansaadeh',
  linkedin: 'linkedin.com/in/yazansaadeh',
  twitter: '',
  summary: 'Architecting high-fidelity, interactive web applications for international clients. Expert in React, TypeScript, state management, and fluid UI animations with 8+ years of production-grade software engineering.',
  experiences: [
    { id: 'exp_1', company: 'Aura Sound Labs', role: 'Lead UI/UX Architect', period: '2024 — Present', desc: 'Orchestrated the development of the SpecPreview suite, reducing bundle sizes by 40% and deploying highly responsive client-side visualizers.' },
    { id: 'exp_2', company: 'Nexus Software Studio', role: 'Senior React Engineer', period: '2021 — 2024', desc: 'Created visual node-based developer workbenches and reactive data pipelines, boosting Canvas-based rendering speed by 60%.' }
  ],
  educations: [
    { id: 'edu_1', institution: 'Jordan University of Science & Technology', degree: 'B.Sc. Software Engineering', period: '2015 — 2019', desc: 'Graduated with honors. Specialized in computational graphics and interactive systems design.' }
  ],
  projects: [
    { id: 'proj_1', title: 'SpecPreview Suite', desc: 'Luxury product exploration dashboard with micro-rotational 3D controls.', link: 'https://specpreview.dev' },
    { id: 'proj_2', title: 'DevNexus Workspace', desc: 'In-browser node-editor wiring CSV inputs to SVG charts.', link: 'https://devnexus.dev' }
  ],
  skills: [
    { id: 'sk_1', name: 'React / Next.js', level: 95 },
    { id: 'sk_2', name: 'TypeScript', level: 90 },
    { id: 'sk_3', name: 'Tailwind CSS', level: 98 },
    { id: 'sk_4', name: 'Framer Motion', level: 85 }
  ],
  languages: [
    { id: 'lang_1', name: 'Arabic', level: 'Native' },
    { id: 'lang_2', name: 'English', level: 'Professional' }
  ],
  awards: [
    { id: 'aw_1', title: 'Top Developer 2026', issuer: 'TechInnovate', period: '2026' }
  ]
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  TEMPLATE PRESETS — 105 UNIQUE DESIGNS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const PRESETS_DATABASE: TemplatePreset[] = [
  // ═══ MINIMALIST (15) — clean, spacious, subtle ═══
  { id: 'min_1',  name: 'Tokyo Clean',       category: 'Minimalist', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#5A6472', sectionStyle: 'classic',        fontSize: 'small',  description: 'Ultra-clean centered layout' },
  { id: 'min_2',  name: 'Geneva Swiss',      category: 'Minimalist', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#1A1917', sectionStyle: 'border-bottom',  fontSize: 'small',  description: 'Swiss typography precision' },
  { id: 'min_3',  name: 'Amsterdam Light',   category: 'Minimalist', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#2B7A78', sectionStyle: 'classic',        fontSize: 'medium', description: 'Elegant serif headings' },
  { id: 'min_4',  name: 'Kyoto Zen',         category: 'Minimalist', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#8B7355', sectionStyle: 'border-bottom',  fontSize: 'small',  description: 'Warm earthy tones' },
  { id: 'min_5',  name: 'Oslo Frost',        category: 'Minimalist', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#64748B', sectionStyle: 'classic',        fontSize: 'small',  description: 'Cool Nordic palette' },
  { id: 'min_6',  name: 'Copenhagen Hygge',  category: 'Minimalist', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#92785C', sectionStyle: 'border-bottom',  fontSize: 'small',  description: 'Cozy sidebar layout' },
  { id: 'min_7',  name: 'Stockholm Air',     category: 'Minimalist', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#6B7280', sectionStyle: 'classic',        fontSize: 'medium', description: 'Airy open spacing' },
  { id: 'min_8',  name: 'Helsinki Pure',     category: 'Minimalist', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#374151', sectionStyle: 'border-bottom',  fontSize: 'small',  description: 'Pure dark accents' },
  { id: 'min_9',  name: 'Zurich Precision',  category: 'Minimalist', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#DC2626', sectionStyle: 'left-indicator', fontSize: 'small',  description: 'Swiss red accent' },
  { id: 'min_10', name: 'Vancouver Calm',    category: 'Minimalist', headerStyle: 'centered',     layoutStyle: 'two-col-right', fontPair: 'sans-sans',    accentColor: '#059669', sectionStyle: 'classic',        fontSize: 'small',  description: 'Nature-inspired green' },
  { id: 'min_11', name: 'Tallinn Digital',   category: 'Minimalist', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'mono',         accentColor: '#5A6472', sectionStyle: 'border-bottom',  fontSize: 'small',  description: 'Digital mono aesthetic' },
  { id: 'min_12', name: 'Reykjavik Mist',    category: 'Minimalist', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-serif',  accentColor: '#78716C', sectionStyle: 'classic',        fontSize: 'medium', description: 'Misty serif elegance' },
  { id: 'min_13', name: 'Wellington Breeze',  category: 'Minimalist', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#0891B2', sectionStyle: 'border-bottom',  fontSize: 'small',  description: 'Ocean blue topbar' },
  { id: 'min_14', name: 'Dublin Slate',      category: 'Minimalist', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'serif-sans',   accentColor: '#57534E', sectionStyle: 'left-indicator', fontSize: 'small',  description: 'Stone gray sidebar' },
  { id: 'min_15', name: 'Seoul Crisp',       category: 'Minimalist', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#7C3AED', sectionStyle: 'classic',        fontSize: 'small',  description: 'Purple pop on white' },

  // ═══ MODERN (15) — bold colors, dynamic layouts ═══
  { id: 'mod_1',  name: 'New York Bold',     category: 'Modern', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#1D4ED8', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Bold blue two-column' },
  { id: 'mod_2',  name: 'Berlin Edge',       category: 'Modern', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#DC2626', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Edgy red topbar' },
  { id: 'mod_3',  name: 'San Francisco Tech', category: 'Modern', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#059669', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Green tech modern' },
  { id: 'mod_4',  name: 'Austin Creative',   category: 'Modern', headerStyle: 'sidebar-photo',layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#D97706', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Amber photo sidebar' },
  { id: 'mod_5',  name: 'London Metro',      category: 'Modern', headerStyle: 'top-bar',      layoutStyle: 'two-col-right', fontPair: 'sans-sans',    accentColor: '#1A1917', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Dark metro style' },
  { id: 'mod_6',  name: 'Sydney Vibrant',    category: 'Modern', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#0891B2', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Cyan vibrant layout' },
  { id: 'mod_7',  name: 'Singapore Sharp',   category: 'Modern', headerStyle: 'top-bar',      layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#7C3AED', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Purple sharp design' },
  { id: 'mod_8',  name: 'Toronto Maple',     category: 'Modern', headerStyle: 'split',        layoutStyle: 'two-col-right', fontPair: 'sans-sans',    accentColor: '#B91C1C', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Red maple right col' },
  { id: 'mod_9',  name: 'Seattle Cloud',     category: 'Modern', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#4F46E5', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Indigo cloud single' },
  { id: 'mod_10', name: 'Boston Harbor',     category: 'Modern', headerStyle: 'sidebar-photo',layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#3B6CB4', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Classic blue photo' },
  { id: 'mod_11', name: 'Denver Mountain',   category: 'Modern', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#16A34A', sectionStyle: 'uppercase-pill', fontSize: 'large',  description: 'Bold green topbar' },
  { id: 'mod_12', name: 'Madrid Sun',        category: 'Modern', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'serif-sans',   accentColor: '#EA580C', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Warm orange split' },
  { id: 'mod_13', name: 'Barcelona Wave',    category: 'Modern', headerStyle: 'top-bar',      layoutStyle: 'two-col-right', fontPair: 'sans-sans',    accentColor: '#2563EB', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Blue wave sidebar' },
  { id: 'mod_14', name: 'Melbourne Fresh',   category: 'Modern', headerStyle: 'centered',     layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#0D9488', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Teal fresh columns' },
  { id: 'mod_15', name: 'Vienna Classic',    category: 'Modern', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#78350F', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Brown classic serif' },

  // ═══ EXECUTIVE (15) — professional, authoritative ═══
  { id: 'exe_1',  name: 'Paris Prestige',    category: 'Executive', headerStyle: 'top-bar',      layoutStyle: 'two-col-right', fontPair: 'serif-sans',   accentColor: '#1E3A5F', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Navy prestige bar' },
  { id: 'exe_2',  name: 'Rome Imperial',     category: 'Executive', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#8B0000', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Deep red imperial' },
  { id: 'exe_3',  name: 'Milan Tailored',    category: 'Executive', headerStyle: 'top-bar',      layoutStyle: 'two-col-right', fontPair: 'serif-sans',   accentColor: '#5A6472', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Slate tailored suit' },
  { id: 'exe_4',  name: 'Dubai Summit',      category: 'Executive', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#B8965A', sectionStyle: 'uppercase-pill', fontSize: 'large',  description: 'Gold centered summit' },
  { id: 'exe_5',  name: 'Amman Royal',       category: 'Executive', headerStyle: 'top-bar',      layoutStyle: 'two-col-left',  fontPair: 'serif-sans',   accentColor: '#2E4057', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Deep blue royal' },
  { id: 'exe_6',  name: 'Vienna Court',      category: 'Executive', headerStyle: 'split',        layoutStyle: 'two-col-right', fontPair: 'serif-serif',  accentColor: '#6D4C41', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Brown courtly style' },
  { id: 'exe_7',  name: 'Geneva Diplomat',   category: 'Executive', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#374151', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Dark diplomat bar' },
  { id: 'exe_8',  name: 'London Board',      category: 'Executive', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'serif-sans',   accentColor: '#1E40AF', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Boardroom blue split' },
  { id: 'exe_9',  name: 'Zurich Banking',    category: 'Executive', headerStyle: 'top-bar',      layoutStyle: 'two-col-right', fontPair: 'sans-sans',    accentColor: '#0C4A6E', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Banking precision' },
  { id: 'exe_10', name: 'Brussels Policy',   category: 'Executive', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#4338CA', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Indigo policy center' },
  { id: 'exe_11', name: 'Munich Order',      category: 'Executive', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#1E3A5F', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Orderly navy split' },
  { id: 'exe_12', name: 'Tokyo Summit',      category: 'Executive', headerStyle: 'top-bar',      layoutStyle: 'two-col-left',  fontPair: 'serif-sans',   accentColor: '#991B1B', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Japanese red accent' },
  { id: 'exe_13', name: 'Singapore Elite',   category: 'Executive', headerStyle: 'split',        layoutStyle: 'two-col-right', fontPair: 'sans-sans',    accentColor: '#3D8B5E', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Green elite sidebar' },
  { id: 'exe_14', name: 'Shanghai Tower',    category: 'Executive', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#7C2D12', sectionStyle: 'uppercase-pill', fontSize: 'large',  description: 'Rust tower bar' },
  { id: 'exe_15', name: 'Hong Kong Peak',    category: 'Executive', headerStyle: 'centered',     layoutStyle: 'two-col-right', fontPair: 'serif-sans',   accentColor: '#1A1917', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Black peak elegance' },

  // ═══ CREATIVE (15) — artistic, colorful, expressive ═══
  { id: 'cre_1',  name: 'Berlin Graffiti',   category: 'Creative', headerStyle: 'sidebar-photo',layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#DC2626', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Red bold sidebar' },
  { id: 'cre_2',  name: 'Barcelona Mosaic',  category: 'Creative', headerStyle: 'centered',     layoutStyle: 'two-col-left',  fontPair: 'serif-sans',   accentColor: '#D97706', sectionStyle: 'left-indicator', fontSize: 'large',  description: 'Amber mosaic design' },
  { id: 'cre_3',  name: 'Austin Indie',      category: 'Creative', headerStyle: 'sidebar-photo',layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#7C3AED', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Purple indie photo' },
  { id: 'cre_4',  name: 'Portland Craft',    category: 'Creative', headerStyle: 'split',        layoutStyle: 'two-col-right', fontPair: 'mono',         accentColor: '#059669', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Green craft mono' },
  { id: 'cre_5',  name: 'Montreal Artisan',  category: 'Creative', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#B8965A', sectionStyle: 'border-bottom',  fontSize: 'large',  description: 'Gold artisan serif' },
  { id: 'cre_6',  name: 'London Studio',     category: 'Creative', headerStyle: 'sidebar-photo',layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#E11D48', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Rose studio sidebar' },
  { id: 'cre_7',  name: 'Paris Atelier',     category: 'Creative', headerStyle: 'centered',     layoutStyle: 'two-col-right', fontPair: 'serif-serif',  accentColor: '#92400E', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Amber atelier right' },
  { id: 'cre_8',  name: 'Venice Canvas',     category: 'Creative', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#0369A1', sectionStyle: 'uppercase-pill', fontSize: 'large',  description: 'Blue canvas topbar' },
  { id: 'cre_9',  name: 'Rio Carnival',      category: 'Creative', headerStyle: 'sidebar-photo',layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#EA580C', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Orange carnival' },
  { id: 'cre_10', name: 'Cape Town Vibrant', category: 'Creative', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#4F46E5', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Indigo vibrant split' },
  { id: 'cre_11', name: 'Amsterdam Gallery', category: 'Creative', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#0D9488', sectionStyle: 'left-indicator', fontSize: 'large',  description: 'Teal gallery centered' },
  { id: 'cre_12', name: 'Milan Design',      category: 'Creative', headerStyle: 'sidebar-photo',layoutStyle: 'two-col-right', fontPair: 'sans-sans',    accentColor: '#C2410C', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Burnt orange photo' },
  { id: 'cre_13', name: 'LA Sunset',         category: 'Creative', headerStyle: 'top-bar',      layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#DB2777', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Pink sunset topbar' },
  { id: 'cre_14', name: 'Stockholm Nordic',  category: 'Creative', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#2B7A78', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Teal Nordic split' },
  { id: 'cre_15', name: 'Kyoto Ink',         category: 'Creative', headerStyle: 'centered',     layoutStyle: 'two-col-left',  fontPair: 'serif-serif',  accentColor: '#1A1917', sectionStyle: 'classic',        fontSize: 'medium', description: 'Black ink calligraphy' },

  // ═══ ACADEMIC (15) — scholarly, traditional, formal ═══
  { id: 'aca_1',  name: 'Boston Scholar',    category: 'Academic', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-serif',  accentColor: '#5A6472', sectionStyle: 'classic',        fontSize: 'medium', description: 'Traditional scholar' },
  { id: 'aca_2',  name: 'Cambridge Classic', category: 'Academic', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#1E3A5F', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Navy academic split' },
  { id: 'aca_3',  name: 'Oxford Heritage',   category: 'Academic', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-serif',  accentColor: '#7C2D12', sectionStyle: 'classic',        fontSize: 'medium', description: 'Oxford rust heritage' },
  { id: 'aca_4',  name: 'Princeton Ivy',     category: 'Academic', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'serif-sans',   accentColor: '#EA580C', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Orange ivy sidebar' },
  { id: 'aca_5',  name: 'Chicago Journal',   category: 'Academic', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-serif',  accentColor: '#8B0000', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Maroon journal style' },
  { id: 'aca_6',  name: 'Berkeley Research', category: 'Academic', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#1D4ED8', sectionStyle: 'classic',        fontSize: 'medium', description: 'Blue research layout' },
  { id: 'aca_7',  name: 'New Haven Thesis',  category: 'Academic', headerStyle: 'centered',     layoutStyle: 'two-col-right', fontPair: 'serif-serif',  accentColor: '#374151', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Gray thesis sidebar' },
  { id: 'aca_8',  name: 'Dublin Lecture',    category: 'Academic', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#166534', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Green lecture topbar' },
  { id: 'aca_9',  name: 'Heidelberg Library', category: 'Academic', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-serif',  accentColor: '#78716C', sectionStyle: 'classic',        fontSize: 'large',  description: 'Warm library serif' },
  { id: 'aca_10', name: 'Kyoto Discipline', category: 'Academic', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#1A1917', sectionStyle: 'border-bottom',  fontSize: 'small',  description: 'Black discipline' },
  { id: 'aca_11', name: 'Toronto Faculty',   category: 'Academic', headerStyle: 'centered',     layoutStyle: 'two-col-left',  fontPair: 'serif-serif',  accentColor: '#3B6CB4', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Blue faculty sidebar' },
  { id: 'aca_12', name: 'Edinburgh Press',   category: 'Academic', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#57534E', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Stone press split' },
  { id: 'aca_13', name: 'Stanford Lab',      category: 'Academic', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#B91C1C', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Red lab topbar' },
  { id: 'aca_14', name: 'Beijing Academy',   category: 'Academic', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-serif',  accentColor: '#DC2626', sectionStyle: 'classic',        fontSize: 'medium', description: 'Red academy serif' },
  { id: 'aca_15', name: 'Amman Institute',   category: 'Academic', headerStyle: 'split',        layoutStyle: 'two-col-right', fontPair: 'serif-sans',   accentColor: '#2E4057', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Navy institute right' },

  // ═══ TECH (15) — developer, modern, mono ═══
  { id: 'tec_1',  name: 'Seattle Terminal',  category: 'Tech', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'mono',         accentColor: '#059669', sectionStyle: 'left-indicator', fontSize: 'small',  description: 'Green terminal sidebar' },
  { id: 'tec_2',  name: 'SF Startup',        category: 'Tech', headerStyle: 'sidebar-photo',layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#4F46E5', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Indigo startup photo' },
  { id: 'tec_3',  name: 'Silicon Circuit',   category: 'Tech', headerStyle: 'top-bar',      layoutStyle: 'two-col-right', fontPair: 'mono',         accentColor: '#0891B2', sectionStyle: 'left-indicator', fontSize: 'small',  description: 'Cyan circuit topbar' },
  { id: 'tec_4',  name: 'Austin Hacker',     category: 'Tech', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'mono',         accentColor: '#16A34A', sectionStyle: 'uppercase-pill', fontSize: 'small',  description: 'Green hacker pills' },
  { id: 'tec_5',  name: 'Tokyo Digital',     category: 'Tech', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'sans-sans',    accentColor: '#DC2626', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Red digital bar' },
  { id: 'tec_6',  name: 'Tel Aviv Agile',    category: 'Tech', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#2563EB', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Blue agile sidebar' },
  { id: 'tec_7',  name: 'Bangalore Code',    category: 'Tech', headerStyle: 'sidebar-photo',layoutStyle: 'two-col-right', fontPair: 'mono',         accentColor: '#7C3AED', sectionStyle: 'border-bottom',  fontSize: 'small',  description: 'Purple code photo' },
  { id: 'tec_8',  name: 'Munich Engine',     category: 'Tech', headerStyle: 'top-bar',      layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#0D9488', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Teal engine topbar' },
  { id: 'tec_9',  name: 'Dublin Deploy',     category: 'Tech', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'mono',         accentColor: '#1A1917', sectionStyle: 'left-indicator', fontSize: 'small',  description: 'Black deploy mono' },
  { id: 'tec_10', name: 'Shenzhen Build',    category: 'Tech', headerStyle: 'top-bar',      layoutStyle: 'two-col-right', fontPair: 'sans-sans',    accentColor: '#EA580C', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Orange build bar' },
  { id: 'tec_11', name: 'Singapore API',     category: 'Tech', headerStyle: 'sidebar-photo',layoutStyle: 'two-col-left',  fontPair: 'mono',         accentColor: '#3B6CB4', sectionStyle: 'left-indicator', fontSize: 'small',  description: 'Blue API sidebar' },
  { id: 'tec_12', name: 'Stockholm Stack',   category: 'Tech', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'sans-sans',    accentColor: '#059669', sectionStyle: 'uppercase-pill', fontSize: 'medium', description: 'Green stack split' },
  { id: 'tec_13', name: 'Seoul DevOps',      category: 'Tech', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'mono',         accentColor: '#0369A1', sectionStyle: 'border-bottom',  fontSize: 'small',  description: 'Blue DevOps topbar' },
  { id: 'tec_14', name: 'London Pipeline',   category: 'Tech', headerStyle: 'split',        layoutStyle: 'two-col-right', fontPair: 'sans-sans',    accentColor: '#6D28D9', sectionStyle: 'left-indicator', fontSize: 'medium', description: 'Purple pipeline' },
  { id: 'tec_15', name: 'Waterloo ML',       category: 'Tech', headerStyle: 'centered',     layoutStyle: 'two-col-left',  fontPair: 'mono',         accentColor: '#2B7A78', sectionStyle: 'border-bottom',  fontSize: 'small',  description: 'Teal ML centered' },

  // ═══ LUXURY (15) — opulent, refined, premium ═══
  { id: 'lux_1',  name: 'Milan Couture',     category: 'Luxury', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-serif',  accentColor: '#B8965A', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Gold couture centered' },
  { id: 'lux_2',  name: 'Monaco Grand',      category: 'Luxury', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-serif',  accentColor: '#1A1917', sectionStyle: 'classic',        fontSize: 'medium', description: 'Black grand elegant' },
  { id: 'lux_3',  name: 'Dubai Palace',      category: 'Luxury', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#B8965A', sectionStyle: 'border-bottom',  fontSize: 'large',  description: 'Gold palace topbar' },
  { id: 'lux_4',  name: 'Paris Haute',       category: 'Luxury', headerStyle: 'centered',     layoutStyle: 'two-col-right', fontPair: 'serif-serif',  accentColor: '#6D4C41', sectionStyle: 'classic',        fontSize: 'medium', description: 'Brown haute sidebar' },
  { id: 'lux_5',  name: 'Beverly Hills',     category: 'Luxury', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#B8965A', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Gold split prestige' },
  { id: 'lux_6',  name: 'Geneva Vault',      category: 'Luxury', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-serif',  accentColor: '#374151', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Steel vault elegance' },
  { id: 'lux_7',  name: 'St. Moritz Alpine', category: 'Luxury', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#1E3A5F', sectionStyle: 'classic',        fontSize: 'medium', description: 'Navy alpine bar' },
  { id: 'lux_8',  name: 'Aspen Lodge',       category: 'Luxury', headerStyle: 'split',        layoutStyle: 'two-col-left',  fontPair: 'serif-serif',  accentColor: '#8B7355', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Walnut lodge sidebar' },
  { id: 'lux_9',  name: 'Saint-Tropez',      category: 'Luxury', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-serif',  accentColor: '#0891B2', sectionStyle: 'classic',        fontSize: 'medium', description: 'Azure coast centered' },
  { id: 'lux_10', name: 'London Mayfair',    category: 'Luxury', headerStyle: 'split',        layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#1A1917', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Black Mayfair split' },
  { id: 'lux_11', name: 'Venice Palazzo',    category: 'Luxury', headerStyle: 'centered',     layoutStyle: 'two-col-right', fontPair: 'serif-serif',  accentColor: '#B8965A', sectionStyle: 'classic',        fontSize: 'large',  description: 'Gold palazzo columns' },
  { id: 'lux_12', name: 'Tokyo Omakase',     category: 'Luxury', headerStyle: 'top-bar',      layoutStyle: 'single-col',    fontPair: 'serif-sans',   accentColor: '#7C2D12', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Rust omakase topbar' },
  { id: 'lux_13', name: 'Singapore Orchid',  category: 'Luxury', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-serif',  accentColor: '#7C5CBF', sectionStyle: 'classic',        fontSize: 'medium', description: 'Purple orchid serif' },
  { id: 'lux_14', name: 'Vienna Opera',      category: 'Luxury', headerStyle: 'split',        layoutStyle: 'two-col-right', fontPair: 'serif-serif',  accentColor: '#8B0000', sectionStyle: 'border-bottom',  fontSize: 'medium', description: 'Crimson opera sidebar' },
  { id: 'lux_15', name: 'Amman Heritage',    category: 'Luxury', headerStyle: 'centered',     layoutStyle: 'single-col',    fontPair: 'serif-serif',  accentColor: '#92785C', sectionStyle: 'classic',        fontSize: 'large',  description: 'Sand heritage serif' },
];

const DEFAULT_SECTION_ORDER = ['summary', 'experiences', 'projects', 'educations', 'skills', 'awards', 'languages'];

const ACCENT_COLORS = [
  { hex: '#B8965A', name: 'Gold' },
  { hex: '#3B6CB4', name: 'Royal Blue' },
  { hex: '#3D8B5E', name: 'Forest' },
  { hex: '#5A6472', name: 'Slate' },
  { hex: '#C44545', name: 'Crimson' },
  { hex: '#2B7A78', name: 'Teal' },
  { hex: '#7C5CBF', name: 'Purple' },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  UTILITY: Generate unique ID
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const uid = () => 'id_' + Math.random().toString(36).slice(2, 10);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MAIN APP COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export default function App() {
  // ── State ──
  const [profiles, setProfiles] = useState<SavedProfile[]>([]);
  const [activeProfileId, setActiveProfileId] = useState('default');
  const [isHydrated, setIsHydrated] = useState(false);

  const [cvData, setCvData] = useState<CVData>(INITIAL_DATA);
  const [photo, setPhoto] = useState('');

  const [headerStyle, setHeaderStyle] = useState('centered');
  const [layoutStyle, setLayoutStyle] = useState('single-col');
  const [fontPair, setFontPair] = useState('serif-sans');
  const [accentColor, setAccentColor] = useState('#B8965A');
  const [sectionStyle, setSectionStyle] = useState('border-bottom');
  const [fontSize, setFontSize] = useState('medium');
  const [sectionOrder, setSectionOrder] = useState<string[]>(DEFAULT_SECTION_ORDER);
  const [showSectionIcons, setShowSectionIcons] = useState(true);
  const [showContactIcons, setShowContactIcons] = useState(true);

  const [activeTab, setActiveTab] = useState('personal');
  const [designView, setDesignView] = useState<'presets' | 'custom'>('presets');
  const [mobileView, setMobileView] = useState<'form' | 'preview'>('form');
  const [previewScale, setPreviewScale] = useState(1);
  const [userZoom, setUserZoom] = useState<number | null>(null); // null = auto-fit
  const [paperHeight, setPaperHeight] = useState(1123);
  const observerRef = React.useRef<ResizeObserver | null>(null);
  const paperRef = useCallback((node: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (node !== null) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          setPaperHeight(entry.target.scrollHeight);
        }
      });
      resizeObserver.observe(node);
      observerRef.current = resizeObserver;
    }
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPresetId, setSelectedPresetId] = useState('');

  // ── Hydration from LocalStorage ──
  useEffect(() => {
    const saved = localStorage.getItem('vitastudio_profiles');
    const activeId = localStorage.getItem('vitastudio_active_profile') || 'default';

    if (saved) {
      try {
        const parsed: SavedProfile[] = JSON.parse(saved);
        setProfiles(parsed);
        setActiveProfileId(activeId);
        const current = parsed.find(p => p.id === activeId);
        if (current) loadProfileData(current);
      } catch { /* ignore */ }
    } else {
      const defaultProfile: SavedProfile = {
        id: 'default', name: 'Primary CV', cvData: INITIAL_DATA, photo: '',
        headerStyle: 'centered', layoutStyle: 'single-col', fontPair: 'serif-sans',
        accentColor: '#B8965A', sectionStyle: 'border-bottom', fontSize: 'medium',
        sectionOrder: DEFAULT_SECTION_ORDER, showSectionIcons: true, showContactIcons: true
      };
      setProfiles([defaultProfile]);
      setActiveProfileId('default');
    }
    setIsHydrated(true);
  }, []);

  // ── Sync active profile back into profiles array ──
  useEffect(() => {
    if (!isHydrated) return;
    setProfiles(prev => {
      if (prev.length === 0) return [{
        id: activeProfileId, name: 'Primary CV', cvData, photo,
        headerStyle, layoutStyle, fontPair, accentColor, sectionStyle, fontSize,
        sectionOrder, showSectionIcons, showContactIcons
      }];
      return prev.map(p => p.id === activeProfileId ? {
        ...p, cvData, photo, headerStyle, layoutStyle, fontPair,
        accentColor, sectionStyle, fontSize, sectionOrder, showSectionIcons, showContactIcons
      } : p);
    });
  }, [cvData, photo, headerStyle, layoutStyle, fontPair, accentColor, sectionStyle, fontSize, sectionOrder, showSectionIcons, showContactIcons, activeProfileId, isHydrated]);

  // ── Persist to localStorage ──
  useEffect(() => {
    if (isHydrated && profiles.length > 0) {
      localStorage.setItem('vitastudio_profiles', JSON.stringify(profiles));
      localStorage.setItem('vitastudio_active_profile', activeProfileId);
    }
  }, [profiles, activeProfileId, isHydrated]);

  // ── A4 Responsive Scaling (auto-fit or user override) ──


  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('preview-scaler');
      if (container) {
        const w = container.clientWidth;
        const target = 794;
        const auto = Math.min(w / target, 1);
        setPreviewScale(auto);
        // If user hasn't set a manual zoom, keep auto
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    const t = setTimeout(handleResize, 200);
    return () => { window.removeEventListener('resize', handleResize); clearTimeout(t); };
  }, [mobileView, activeTab]);

  const effectiveZoom = userZoom !== null ? userZoom : previewScale;

  const zoomIn = useCallback(() => {
    setUserZoom(prev => Math.min((prev ?? previewScale) + 0.1, 2));
  }, [previewScale]);

  const zoomOut = useCallback(() => {
    setUserZoom(prev => Math.max((prev ?? previewScale) - 0.1, 0.2));
  }, [previewScale]);

  const zoomFit = useCallback(() => {
    setUserZoom(null); // revert to auto-fit
  }, []);

  const zoomReset = useCallback(() => {
    setUserZoom(1); // 100%
  }, []);

  // ── Photo Upload with compression ──
  const handlePhotoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let w = img.width, h = img.height;
        const MAX = 200;
        if (w > h) { if (w > MAX) { h *= MAX / w; w = MAX; } }
        else { if (h > MAX) { w *= MAX / h; h = MAX; } }
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d')?.drawImage(img, 0, 0, w, h);
        setPhoto(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.src = ev.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  // ── Array CRUD Operations ──
  type ArrayKey = 'experiences' | 'educations' | 'projects' | 'skills' | 'languages' | 'awards';

  const addItem = useCallback((key: ArrayKey) => {
    const id = uid();
    const templates: Record<ArrayKey, any> = {
      experiences: { id, company: '', role: '', period: '', desc: '' },
      educations: { id, institution: '', degree: '', period: '', desc: '' },
      projects: { id, title: '', desc: '', link: '' },
      skills: { id, name: '', level: 80 },
      languages: { id, name: '', level: 'Fluent' },
      awards: { id, title: '', issuer: '', period: '' },
    };
    setCvData(prev => ({ ...prev, [key]: [...prev[key], templates[key]] }));
  }, []);

  const deleteItem = useCallback((key: ArrayKey, id: string) => {
    setCvData(prev => ({ ...prev, [key]: prev[key].filter((i: any) => i.id !== id) }));
  }, []);

  const updateItem = useCallback((key: ArrayKey, id: string, field: string, value: any) => {
    setCvData(prev => ({
      ...prev,
      [key]: prev[key].map((i: any) => i.id === id ? { ...i, [field]: value } : i)
    }));
  }, []);

  const moveItem = useCallback((key: ArrayKey, index: number, dir: 'up' | 'down') => {
    setCvData(prev => {
      const list = [...prev[key]];
      const target = dir === 'up' ? index - 1 : index + 1;
      if (target < 0 || target >= list.length) return prev;
      [list[index], list[target]] = [list[target], list[index]];
      return { ...prev, [key]: list };
    });
  }, []);

  const moveSection = useCallback((index: number, dir: 'up' | 'down') => {
    setSectionOrder(prev => {
      const arr = [...prev];
      const target = dir === 'up' ? index - 1 : index + 1;
      if (target < 0 || target >= arr.length) return prev;
      [arr[index], arr[target]] = [arr[target], arr[index]];
      return arr;
    });
  }, []);

  // ── Profile Management ──
  const loadProfileData = useCallback((p: SavedProfile) => {
    setCvData(p.cvData);
    setPhoto(p.photo || '');
    setHeaderStyle(p.headerStyle || 'centered');
    setLayoutStyle(p.layoutStyle || 'single-col');
    setFontPair(p.fontPair || 'serif-sans');
    setAccentColor(p.accentColor || '#B8965A');
    setSectionStyle(p.sectionStyle || 'border-bottom');
    setFontSize(p.fontSize || 'medium');
    setSectionOrder(p.sectionOrder || DEFAULT_SECTION_ORDER);
    setShowSectionIcons(p.showSectionIcons ?? true);
    setShowContactIcons(p.showContactIcons ?? true);
  }, []);

  const createProfile = useCallback(() => {
    const id = uid();
    const newProf: SavedProfile = {
      id, name: `CV #${profiles.length + 1}`,
      cvData: { ...INITIAL_DATA, fullName: '', jobTitle: '' }, photo: '',
      headerStyle: 'centered', layoutStyle: 'single-col', fontPair: 'serif-sans',
      accentColor: '#B8965A', sectionStyle: 'border-bottom', fontSize: 'medium',
      sectionOrder: DEFAULT_SECTION_ORDER, showSectionIcons: true, showContactIcons: true
    };
    setProfiles(prev => [...prev, newProf]);
    setActiveProfileId(id);
    loadProfileData(newProf);
  }, [profiles.length, loadProfileData]);

  const duplicateProfile = useCallback(() => {
    const active = profiles.find(p => p.id === activeProfileId);
    if (!active) return;
    const id = uid();
    const cloned = { ...active, id, name: `${active.name} (Copy)` };
    setProfiles(prev => [...prev, cloned]);
    setActiveProfileId(id);
    loadProfileData(cloned);
  }, [profiles, activeProfileId, loadProfileData]);

  const deleteProfile = useCallback((id: string) => {
    if (profiles.length <= 1) return;
    const remaining = profiles.filter(p => p.id !== id);
    setProfiles(remaining);
    setActiveProfileId(remaining[0].id);
    loadProfileData(remaining[0]);
  }, [profiles, loadProfileData]);

  const clearWorkspace = useCallback(() => {
    setCvData({
      fullName: '', jobTitle: '', email: '', phone: '', location: '', summary: '',
      website: '', github: '', linkedin: '', twitter: '',
      experiences: [], educations: [], projects: [], skills: [], languages: [], awards: []
    });
    setPhoto('');
  }, []);

  // ── Export Functions ──
  const triggerPrint = useCallback(() => window.print(), []);

  const exportDocx = useCallback(() => {
    const content = document.getElementById('print-resume-area')?.innerHTML;
    if (!content) return;
    const html = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><title>Resume - ${cvData.fullName}</title>
      <style>body{font-family:'Arial',sans-serif;font-size:10pt;color:#111}h1{font-size:22pt;margin-bottom:4px}h2{font-size:11pt;color:${accentColor};border-bottom:1px solid ${accentColor};padding-bottom:2px;margin-top:14px;text-transform:uppercase}a{color:${accentColor}}.item-title{font-weight:bold}</style></head>
      <body>${content}</body></html>`;
    const blob = new Blob(['\ufeff' + html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(cvData.fullName || 'Resume').replace(/\s+/g, '_')}.doc`;
    a.click();
    URL.revokeObjectURL(url);
  }, [cvData.fullName, accentColor]);

  const applyPreset = useCallback((preset: TemplatePreset) => {
    setHeaderStyle(preset.headerStyle);
    setLayoutStyle(preset.layoutStyle);
    setFontPair(preset.fontPair);
    setAccentColor(preset.accentColor);
    setSectionStyle(preset.sectionStyle);
    setFontSize(preset.fontSize);
    setSelectedPresetId(preset.id);
  }, []);

  // ── Styling Configurations ──
  const fontPairMap: Record<string, { body: string; head: string; css: string }> = {
    'serif-sans': { body: "'Inter', sans-serif", head: "'Playfair Display', serif", css: 'font-sans' },
    'sans-sans': { body: "'Inter', sans-serif", head: "'Inter', sans-serif", css: 'font-sans' },
    'serif-serif': { body: "'Playfair Display', serif", head: "'Playfair Display', serif", css: 'font-serif' },
    'mono': { body: "'JetBrains Mono', monospace", head: "'JetBrains Mono', monospace", css: 'font-mono' },
  };
  const fonts = fontPairMap[fontPair] || fontPairMap['serif-sans'];

  const sizeMap: Record<string, { body: string; h1: string; h2: string; meta: string }> = {
    small: { body: '10px', h1: '20px', h2: '11px', meta: '9px' },
    medium: { body: '11px', h1: '24px', h2: '12px', meta: '10px' },
    large: { body: '12px', h1: '28px', h2: '13px', meta: '11px' },
  };
  const sizes = sizeMap[fontSize] || sizeMap.medium;

  // ── Filtered Presets ──
  const filteredPresets = useMemo(() => {
    return PRESETS_DATABASE.filter(p => {
      const matchSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [searchQuery, selectedCategory]);

  // ── Helper: Render Section Title (for CV preview) ──
  const SectionTitle = ({ title, icon }: { title: string; icon?: React.ReactNode }) => {
    const iconEl = showSectionIcons && icon ? (
      <span style={{ color: accentColor, display: 'inline-flex', alignItems: 'center', marginRight: 6, opacity: 0.85 }}>{icon}</span>
    ) : null;

    const styles: React.CSSProperties = {
      fontFamily: fonts.head,
      fontSize: sizes.h2,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase' as const,
      marginTop: 16,
      marginBottom: 8,
      display: 'flex',
      alignItems: 'center',
    };

    switch (sectionStyle) {
      case 'border-bottom':
        return <h3 style={{ ...styles, paddingBottom: 6, borderBottom: `1.5px solid ${accentColor}` }}>{iconEl}{title}</h3>;
      case 'left-indicator':
        return <h3 style={{ ...styles, paddingLeft: 10, borderLeft: `3px solid ${accentColor}` }}>{iconEl}{title}</h3>;
      case 'uppercase-pill':
        return <h3 style={{ ...styles, background: accentColor, color: 'white', padding: '5px 12px', borderRadius: 6, width: 'fit-content', letterSpacing: '0.08em' }}>
          {showSectionIcons && icon && <span style={{ color: 'white', display: 'inline-flex', alignItems: 'center', marginRight: 6 }}>{icon}</span>}
          {title}
        </h3>;
      default: // classic
        return <h3 style={{ ...styles, color: accentColor }}>{iconEl}{title}</h3>;
    }
  };

  // ── Helper: Contact line (with optional icon) ──
  const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
    if (!text) return null;
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: sizes.meta, color: '#6B6860' }}>
        {showContactIcons && <span style={{ color: accentColor, display: 'inline-flex' }}>{icon}</span>}
        {text}
      </span>
    );
  };

  // ── Helper: Render CV Section by key ──
  const renderSection = (key: string, isSidebar = false) => {
    const itemStyle: React.CSSProperties = { fontSize: sizes.body, lineHeight: 1.6, color: '#333' };
    const boldStyle: React.CSSProperties = { fontWeight: 600, fontSize: sizes.body, color: '#1A1917' };
    const subStyle: React.CSSProperties = { fontSize: sizes.meta, color: '#888' };

    switch (key) {
      case 'summary':
        if (!cvData.summary) return null;
        return <div key="summary">
          <SectionTitle title="Profile" icon={<User size={13} />} />
          <p style={{ ...itemStyle, textAlign: 'justify', whiteSpace: 'pre-line' }}>{cvData.summary}</p>
        </div>;

      case 'experiences':
        if (!cvData.experiences.length) return null;
        return <div key="experiences">
          <SectionTitle title="Experience" icon={<Briefcase size={13} />} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {cvData.experiences.map(exp => (
              <div key={exp.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={boldStyle}>{exp.company}</span>
                  <span style={{ ...subStyle, fontWeight: 600 }}>{exp.period}</span>
                </div>
                <div style={{ fontStyle: 'italic', fontSize: sizes.body, color: '#666', fontFamily: fonts.head }}>{exp.role}</div>
                {exp.desc && <p style={{ ...itemStyle, marginTop: 4, whiteSpace: 'pre-line' }}>{exp.desc}</p>}
              </div>
            ))}
          </div>
        </div>;

      case 'educations':
        if (!cvData.educations.length) return null;
        return <div key="educations">
          <SectionTitle title="Education" icon={<GraduationCap size={13} />} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {cvData.educations.map(edu => (
              <div key={edu.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={boldStyle}>{edu.institution}</span>
                  <span style={{ ...subStyle, fontWeight: 600 }}>{edu.period}</span>
                </div>
                <div style={{ fontStyle: 'italic', fontSize: sizes.body, color: '#666' }}>{edu.degree}</div>
                {edu.desc && <p style={{ ...itemStyle, marginTop: 3, whiteSpace: 'pre-line' }}>{edu.desc}</p>}
              </div>
            ))}
          </div>
        </div>;

      case 'projects':
        if (!cvData.projects.length) return null;
        return <div key="projects">
          <SectionTitle title="Projects" icon={<FolderGit size={13} />} />
          <div style={{ display: isSidebar ? 'flex' : 'grid', flexDirection: 'column', gridTemplateColumns: isSidebar ? undefined : '1fr 1fr', gap: 10 }}>
            {cvData.projects.map(proj => (
              <div key={proj.id} style={{ padding: 10, border: '1px solid #F0EFED', borderRadius: 8, background: '#FAFAF8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={boldStyle}>{proj.title}</span>
                  {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" style={{ color: accentColor }}><ExternalLink size={12} /></a>}
                </div>
                <p style={{ fontSize: sizes.meta, color: '#666', marginTop: 4, whiteSpace: 'pre-line' }}>{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>;

      case 'skills':
        if (!cvData.skills.length) return null;
        return <div key="skills">
          <SectionTitle title="Skills" icon={<Code size={13} />} />
          {isSidebar ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {cvData.skills.map(sk => (
                <div key={sk.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: sizes.meta, fontWeight: 600, color: '#1A1917', marginBottom: 3 }}>
                    <span>{sk.name}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: '#888' }}>{sk.level}%</span>
                  </div>
                  <div style={{ height: 5, background: '#F0EFED', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${sk.level}%`, background: accentColor, borderRadius: 3, transition: 'width 0.3s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {cvData.skills.map(sk => (
                <span key={sk.id} style={{ padding: '4px 10px', background: `${accentColor}10`, border: `1px solid ${accentColor}25`, borderRadius: 6, fontSize: sizes.meta, fontWeight: 600, color: '#1A1917' }}>
                  {sk.name}
                </span>
              ))}
            </div>
          )}
        </div>;

      case 'awards':
        if (!cvData.awards.length) return null;
        return <div key="awards">
          <SectionTitle title="Awards" icon={<Award size={13} />} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {cvData.awards.map(aw => (
              <div key={aw.id}>
                <span style={boldStyle}>{aw.title}</span>
                <div style={subStyle}>{aw.issuer} · {aw.period}</div>
              </div>
            ))}
          </div>
        </div>;

      case 'languages':
        if (!cvData.languages.length) return null;
        return <div key="languages">
          <SectionTitle title="Languages" icon={<Languages size={13} />} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {cvData.languages.map(lang => (
              <div key={lang.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: sizes.meta }}>
                <span style={{ fontWeight: 600, color: '#1A1917' }}>{lang.name}</span>
                <span style={{ color: '#888' }}>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>;

      default: return null;
    }
  };

  // ── Tabs config ──
  const tabs = [
    { id: 'personal', label: 'Identity', icon: <User size={16} /> },
    { id: 'experience', label: 'History', icon: <Briefcase size={16} /> },
    { id: 'education', label: 'Studies', icon: <GraduationCap size={16} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
    { id: 'styling', label: 'Design', icon: <Palette size={16} /> },
  ];

  const SECTION_LABELS: Record<string, string> = {
    summary: 'Profile Summary', experiences: 'Work Experience', projects: 'Projects',
    educations: 'Education', skills: 'Skills', awards: 'Awards', languages: 'Languages'
  };

  // ── Helper: Reusable input field ──
  const Field = ({ label, value, onChange, placeholder, type = 'text', rows }: {
    label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; rows?: number;
  }) => (
    <div>
      <label className="field-label">{label}</label>
      {rows ? (
        <textarea className="input-field textarea-field" rows={rows} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
      ) : (
        <input className="input-field" type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
      )}
    </div>
  );

  // ── Helper: Array item card with reordering ──
  const ItemCard = ({ children, index, total, onMoveUp, onMoveDown, onDelete }: {
    children: React.ReactNode; index: number; total: number;
    onMoveUp: () => void; onMoveDown: () => void; onDelete: () => void;
  }) => (
    <div className="card-item relative animate-fadeIn">
      <div className="absolute top-3 right-3 flex items-center gap-1">
        {index > 0 && <button className="btn-icon" style={{ width: 28, height: 28 }} onClick={onMoveUp} title="Move Up"><ChevronUp size={14} /></button>}
        {index < total - 1 && <button className="btn-icon" style={{ width: 28, height: 28 }} onClick={onMoveDown} title="Move Down"><ChevronDown size={14} /></button>}
        <button className="btn-icon btn-danger" style={{ width: 28, height: 28 }} onClick={onDelete} title="Delete"><Trash2 size={14} /></button>
      </div>
      <div className="pr-24">{children}</div>
    </div>
  );

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  RENDER
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#FAFAF8' }}>

      {/* ═══ Background Mesh ═══ */}
      <div className="bg-gradient-mesh no-print" />

      {/* ═══ NAVBAR ═══ */}
      <header className="navbar-glass sticky top-0 z-50 no-print">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <span className="text-[8px] font-black uppercase tracking-[0.15em] bg-[#1A1917] text-white px-2 py-1 rounded-md">Day 01</span>
            </div>
            <h1 className="text-lg font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              VITA<span style={{ color: accentColor }}>STUDIO</span>
            </h1>
            <span className="hidden lg:inline text-[11px] font-medium text-[#9C9890] border-l border-[#E8E6E1] pl-3 ml-1">Premium CV Builder</span>
          </div>

          {/* Developer & Repo Links */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-semibold text-[#5C5A54]">
            <a href="https://github.com/8bbxc" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A1917] flex items-center gap-1.5 transition-colors">
              <GithubIcon className="w-4 h-4 text-[#9C9890]" />
              <span>GitHub: @8bbxc</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-[#D6D3CD]" />
            <a href="https://github.com/8bbxc/vitastudio-cv-builder" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A1917] flex items-center gap-1.5 transition-colors">
              <FolderGit className="w-4 h-4 text-[#9C9890]" />
              <span>Repository</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-[#D6D3CD]" />
            <a href="https://instagram.com/eng.yazan46" target="_blank" rel="noopener noreferrer" className="hover:text-[#D62976] flex items-center gap-1.5 transition-colors">
              <InstagramIcon className="w-4 h-4 text-[#9C9890]" />
              <span>@eng.yazan46</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-[#D6D3CD]" />
            <a href="https://wa.me/970568203031" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] flex items-center gap-1.5 transition-colors">
              <WhatsappIcon className="w-4 h-4 text-[#9C9890]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="btn-secondary hidden sm:inline-flex" onClick={() => setCvData(INITIAL_DATA)}>
              <RotateCcw size={14} /> <span className="hidden md:inline">Sample</span>
            </button>
            <button className="btn-secondary hidden sm:inline-flex" onClick={clearWorkspace}>
              <X size={14} /> <span className="hidden md:inline">Clear</span>
            </button>
            <button className="btn-secondary" onClick={exportDocx}>
              <Download size={14} /> <span className="hidden sm:inline">Word</span>
            </button>
            <button className="btn-primary" onClick={triggerPrint}>
              <Printer size={14} /> <span>PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE VIEW TOGGLE ═══ */}
      <div className="xl:hidden flex justify-center py-3 gap-2 no-print border-b border-[#E8E6E1] bg-white/80 backdrop-blur-sm mobile-toggle-bar">
        <button
          className={`chip ${mobileView === 'form' ? 'active' : ''}`}
          onClick={() => setMobileView('form')}
        >
          <Settings2 size={14} className="inline mr-1" /> Editor
        </button>
        <button
          className={`chip ${mobileView === 'preview' ? 'active' : ''}`}
          onClick={() => setMobileView('preview')}
        >
          <Eye size={14} className="inline mr-1" /> Preview
        </button>
      </div>

      {/* ═══ MAIN COCKPIT ═══ */}
      <main className="flex-1 max-w-[1600px] mx-auto w-full px-4 sm:px-6 py-6 grid grid-cols-1 xl:grid-cols-12 gap-6 relative z-10">

        {/* ═══════════════════════════════════
            LEFT PANEL — FORM EDITOR
        ═══════════════════════════════════ */}
        <section className={`xl:col-span-5 flex flex-col bg-white rounded-2xl border border-[#E8E6E1] overflow-hidden no-print ${mobileView !== 'form' ? 'hidden xl:flex' : ''}`}
          style={{ height: 'calc(100vh - 120px)', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
        >
          {/* Tab Navigation */}
          <div className="p-4 border-b border-[#F0EFED]">
            <div className="tab-nav">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Form Content */}
          <div className="flex-1 overflow-y-auto p-5">
            <AnimatePresence mode="wait">

              {/* ────── TAB: Personal Info ────── */}
              {activeTab === 'personal' && (
                <motion.div key="personal" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-5">

                  {/* Profile Manager */}
                  <div className="card-section space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="field-label" style={{ marginBottom: 0 }}>CV Profiles</span>
                      <button className="btn-primary" style={{ padding: '6px 12px', fontSize: 10 }} onClick={createProfile}>
                        <FolderPlus size={12} /> New
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={activeProfileId}
                        onChange={e => { setActiveProfileId(e.target.value); const p = profiles.find(x => x.id === e.target.value); if (p) loadProfileData(p); }}
                        className="input-field flex-1" style={{ padding: '8px 12px' }}
                      >
                        {profiles.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                      </select>
                      <button className="btn-icon" onClick={duplicateProfile} title="Duplicate"><Copy size={14} /></button>
                      {profiles.length > 1 && <button className="btn-icon btn-danger" onClick={() => deleteProfile(activeProfileId)} title="Delete"><Trash2 size={14} /></button>}
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div className="card-section flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full border border-[#E8E6E1] bg-[#F7F7F5] overflow-hidden flex items-center justify-center flex-shrink-0">
                      {photo ? <img src={photo} alt="Profile" className="w-full h-full object-cover" /> : <User size={24} className="text-[#D6D3CD]" />}
                    </div>
                    <div className="flex-1">
                      <label className="btn-secondary cursor-pointer" style={{ fontSize: 10, padding: '7px 14px' }}>
                        <Upload size={13} /> Upload Photo
                        <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                      </label>
                      {photo && <button className="btn-secondary btn-danger ml-2" style={{ fontSize: 10, padding: '7px 14px' }} onClick={() => setPhoto('')}>Remove</button>}
                    </div>
                  </div>

                  {/* Core Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Full Name" value={cvData.fullName} onChange={v => setCvData(d => ({ ...d, fullName: v }))} />
                    <Field label="Job Title" value={cvData.jobTitle} onChange={v => setCvData(d => ({ ...d, jobTitle: v }))} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Email" value={cvData.email} onChange={v => setCvData(d => ({ ...d, email: v }))} type="email" />
                    <Field label="Phone" value={cvData.phone} onChange={v => setCvData(d => ({ ...d, phone: v }))} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Location" value={cvData.location} onChange={v => setCvData(d => ({ ...d, location: v }))} />
                    <Field label="Website" value={cvData.website} onChange={v => setCvData(d => ({ ...d, website: v }))} />
                  </div>

                  {/* Social Links */}
                  <div className="card-section space-y-3">
                    <span className="field-label" style={{ marginBottom: 0 }}>Social Links</span>
                    <div className="grid grid-cols-3 gap-3">
                      <Field label="GitHub" value={cvData.github} onChange={v => setCvData(d => ({ ...d, github: v }))} placeholder="github.com/..." />
                      <Field label="LinkedIn" value={cvData.linkedin} onChange={v => setCvData(d => ({ ...d, linkedin: v }))} placeholder="linkedin.com/..." />
                      <Field label="Twitter / X" value={cvData.twitter} onChange={v => setCvData(d => ({ ...d, twitter: v }))} placeholder="x.com/..." />
                    </div>
                  </div>

                  <Field label="Professional Summary" value={cvData.summary} onChange={v => setCvData(d => ({ ...d, summary: v }))} rows={4} />
                </motion.div>
              )}

              {/* ────── TAB: Experience + Projects ────── */}
              {activeTab === 'experience' && (
                <motion.div key="experience" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-6">

                  {/* Experiences */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Work Experience</h3>
                      <button className="btn-primary" style={{ padding: '6px 12px', fontSize: 10 }} onClick={() => addItem('experiences')}>
                        <Plus size={12} /> Add
                      </button>
                    </div>
                    <div className="space-y-3">
                      {cvData.experiences.map((exp, idx) => (
                        <ItemCard key={exp.id} index={idx} total={cvData.experiences.length}
                          onMoveUp={() => moveItem('experiences', idx, 'up')}
                          onMoveDown={() => moveItem('experiences', idx, 'down')}
                          onDelete={() => deleteItem('experiences', exp.id)}
                        >
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <Field label="Company" value={exp.company} onChange={v => updateItem('experiences', exp.id, 'company', v)} />
                            <Field label="Role" value={exp.role} onChange={v => updateItem('experiences', exp.id, 'role', v)} />
                          </div>
                          <Field label="Period" value={exp.period} onChange={v => updateItem('experiences', exp.id, 'period', v)} placeholder="2022 — Present" />
                          <div className="mt-3">
                            <Field label="Description" value={exp.desc} onChange={v => updateItem('experiences', exp.id, 'desc', v)} rows={2} />
                          </div>
                        </ItemCard>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-3 pt-4 border-t border-[#F0EFED]">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Projects</h3>
                      <button className="btn-primary" style={{ padding: '6px 12px', fontSize: 10 }} onClick={() => addItem('projects')}>
                        <Plus size={12} /> Add
                      </button>
                    </div>
                    <div className="space-y-3">
                      {cvData.projects.map((proj, idx) => (
                        <ItemCard key={proj.id} index={idx} total={cvData.projects.length}
                          onMoveUp={() => moveItem('projects', idx, 'up')}
                          onMoveDown={() => moveItem('projects', idx, 'down')}
                          onDelete={() => deleteItem('projects', proj.id)}
                        >
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <Field label="Title" value={proj.title} onChange={v => updateItem('projects', proj.id, 'title', v)} />
                            <Field label="URL" value={proj.link} onChange={v => updateItem('projects', proj.id, 'link', v)} placeholder="https://..." />
                          </div>
                          <Field label="Description" value={proj.desc} onChange={v => updateItem('projects', proj.id, 'desc', v)} rows={2} />
                        </ItemCard>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ────── TAB: Education + Awards ────── */}
              {activeTab === 'education' && (
                <motion.div key="education" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-6">

                  {/* Education */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Education</h3>
                      <button className="btn-primary" style={{ padding: '6px 12px', fontSize: 10 }} onClick={() => addItem('educations')}>
                        <Plus size={12} /> Add
                      </button>
                    </div>
                    <div className="space-y-3">
                      {cvData.educations.map((edu, idx) => (
                        <ItemCard key={edu.id} index={idx} total={cvData.educations.length}
                          onMoveUp={() => moveItem('educations', idx, 'up')}
                          onMoveDown={() => moveItem('educations', idx, 'down')}
                          onDelete={() => deleteItem('educations', edu.id)}
                        >
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <Field label="Institution" value={edu.institution} onChange={v => updateItem('educations', edu.id, 'institution', v)} />
                            <Field label="Degree" value={edu.degree} onChange={v => updateItem('educations', edu.id, 'degree', v)} />
                          </div>
                          <Field label="Period" value={edu.period} onChange={v => updateItem('educations', edu.id, 'period', v)} />
                          <div className="mt-3">
                            <Field label="Details" value={edu.desc} onChange={v => updateItem('educations', edu.id, 'desc', v)} rows={2} />
                          </div>
                        </ItemCard>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  <div className="space-y-3 pt-4 border-t border-[#F0EFED]">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Awards & Certifications</h3>
                      <button className="btn-primary" style={{ padding: '6px 12px', fontSize: 10 }} onClick={() => addItem('awards')}>
                        <Plus size={12} /> Add
                      </button>
                    </div>
                    <div className="space-y-3">
                      {cvData.awards.map((aw, idx) => (
                        <ItemCard key={aw.id} index={idx} total={cvData.awards.length}
                          onMoveUp={() => moveItem('awards', idx, 'up')}
                          onMoveDown={() => moveItem('awards', idx, 'down')}
                          onDelete={() => deleteItem('awards', aw.id)}
                        >
                          <div className="grid grid-cols-3 gap-3">
                            <Field label="Title" value={aw.title} onChange={v => updateItem('awards', aw.id, 'title', v)} />
                            <Field label="Issuer" value={aw.issuer} onChange={v => updateItem('awards', aw.id, 'issuer', v)} />
                            <Field label="Year" value={aw.period} onChange={v => updateItem('awards', aw.id, 'period', v)} />
                          </div>
                        </ItemCard>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ────── TAB: Skills + Languages ────── */}
              {activeTab === 'skills' && (
                <motion.div key="skills" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-6">

                  {/* Skills */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Technical Skills</h3>
                      <button className="btn-primary" style={{ padding: '6px 12px', fontSize: 10 }} onClick={() => addItem('skills')}>
                        <Plus size={12} /> Add
                      </button>
                    </div>
                    <div className="space-y-3">
                      {cvData.skills.map((sk, idx) => (
                        <ItemCard key={sk.id} index={idx} total={cvData.skills.length}
                          onMoveUp={() => moveItem('skills', idx, 'up')}
                          onMoveDown={() => moveItem('skills', idx, 'down')}
                          onDelete={() => deleteItem('skills', sk.id)}
                        >
                          <div className="flex items-end gap-3">
                            <div className="flex-1">
                              <Field label="Skill Name" value={sk.name} onChange={v => updateItem('skills', sk.id, 'name', v)} />
                            </div>
                            <div style={{ width: 90 }}>
                              <label className="field-label">Level</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="range" min={0} max={100} value={sk.level}
                                  onChange={e => updateItem('skills', sk.id, 'level', Number(e.target.value))}
                                  className="flex-1" style={{ accentColor: '#1A1917' }}
                                />
                                <span className="text-xs font-bold text-[#6B6860] w-8 text-right">{sk.level}%</span>
                              </div>
                            </div>
                          </div>
                        </ItemCard>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="space-y-3 pt-4 border-t border-[#F0EFED]">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Languages</h3>
                      <button className="btn-primary" style={{ padding: '6px 12px', fontSize: 10 }} onClick={() => addItem('languages')}>
                        <Plus size={12} /> Add
                      </button>
                    </div>
                    <div className="space-y-3">
                      {cvData.languages.map((lang, idx) => (
                        <ItemCard key={lang.id} index={idx} total={cvData.languages.length}
                          onMoveUp={() => moveItem('languages', idx, 'up')}
                          onMoveDown={() => moveItem('languages', idx, 'down')}
                          onDelete={() => deleteItem('languages', lang.id)}
                        >
                          <div className="grid grid-cols-2 gap-3">
                            <Field label="Language" value={lang.name} onChange={v => updateItem('languages', lang.id, 'name', v)} />
                            <div>
                              <label className="field-label">Proficiency</label>
                              <select className="input-field" value={lang.level} onChange={e => updateItem('languages', lang.id, 'level', e.target.value)}>
                                {['Native', 'Professional', 'Fluent', 'Intermediate', 'Basic'].map(l => <option key={l} value={l}>{l}</option>)}
                              </select>
                            </div>
                          </div>
                        </ItemCard>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ────── TAB: Design & Styling ────── */}
              {activeTab === 'styling' && (
                <motion.div key="styling" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-5">

                  {/* Toggle: Presets vs Custom */}
                  <div className="flex gap-2">
                    <button className={`chip flex-1 ${designView === 'presets' ? 'active' : ''}`} onClick={() => setDesignView('presets')}>
                      <LayoutTemplate size={14} className="inline mr-1" /> Template Gallery
                    </button>
                    <button className={`chip flex-1 ${designView === 'custom' ? 'active' : ''}`} onClick={() => setDesignView('custom')}>
                      <Settings2 size={14} className="inline mr-1" /> Custom Design
                    </button>
                  </div>

                  {/* Presets Gallery */}
                  {designView === 'presets' && (
                    <div className="space-y-4 animate-fadeIn">
                      {/* Search & Filter */}
                      <div className="relative">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9C9890]" />
                        <input
                          className="input-field pl-9"
                          placeholder="Search 105 templates..."
                          value={searchQuery}
                          onChange={e => setSearchQuery(e.target.value)}
                        />
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {['All', ...['Minimalist', 'Modern', 'Executive', 'Creative', 'Academic', 'Tech', 'Luxury']].map(cat => (
                          <button
                            key={cat}
                            className={`chip ${selectedCategory === cat ? 'active' : ''}`}
                            style={{ padding: '5px 10px', fontSize: 10 }}
                            onClick={() => setSelectedCategory(cat)}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="text-[10px] text-[#9C9890] font-medium">
                        {filteredPresets.length} templates found
                      </div>

                      {/* Template Grid */}
                      <div className="grid grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto pr-1">
                        {filteredPresets.map(preset => (
                          <button
                            key={preset.id}
                            className={`template-card text-left ${selectedPresetId === preset.id ? 'active' : ''}`}
                            onClick={() => applyPreset(preset)}
                          >
                            {/* Mini Preview */}
                            <div className="w-full aspect-[3/4] rounded-lg mb-2 relative overflow-hidden" style={{ background: '#F7F7F5', border: '1px solid #F0EFED' }}>
                              <div className="absolute inset-2 flex flex-col">
                                {/* Mini header */}
                                <div className={`mb-2 ${preset.headerStyle === 'centered' ? 'text-center' : ''}`}>
                                  {preset.headerStyle === 'top-bar' && <div className="h-1 rounded-full mb-1.5" style={{ background: preset.accentColor }} />}
                                  <div className="h-1.5 rounded-full w-2/3 bg-[#1A1917] mx-auto mb-1" style={preset.headerStyle !== 'centered' ? { marginLeft: 0 } : {}} />
                                  <div className="h-1 rounded-full w-1/3 mx-auto" style={{ background: preset.accentColor, ...(preset.headerStyle !== 'centered' ? { marginLeft: 0 } : {}) }} />
                                </div>
                                {/* Mini body */}
                                <div className="flex-1 flex gap-1.5">
                                  {preset.layoutStyle !== 'single-col' && (
                                    <div className={`w-1/3 space-y-1 ${preset.layoutStyle === 'two-col-right' ? 'order-last' : ''}`}>
                                      {[1,2,3].map(i => <div key={i} className="h-1 rounded-full bg-[#E8E6E1]" />)}
                                    </div>
                                  )}
                                  <div className="flex-1 space-y-1.5">
                                    <div className="h-1 rounded-full" style={{ background: preset.accentColor, width: '60%' }} />
                                    {[1,2,3,4].map(i => <div key={i} className="h-0.5 rounded-full bg-[#E8E6E1]" style={{ width: `${90 - i * 10}%` }} />)}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[11px] font-semibold text-[#1A1917] truncate">{preset.name}</div>
                            <div className="text-[9px] text-[#9C9890] mt-0.5 flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full inline-block" style={{ background: preset.accentColor }} />
                              {preset.category}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Custom Design Controls */}
                  {designView === 'custom' && (
                    <div className="space-y-5 animate-fadeIn">

                      {/* Header Style */}
                      <div>
                        <label className="field-label">Header Layout</label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { id: 'centered', label: 'Centered' },
                            { id: 'split', label: 'Split' },
                            { id: 'top-bar', label: 'Top Bar' },
                            { id: 'sidebar-photo', label: 'Sidebar Photo' }
                          ].map(h => (
                            <button key={h.id} className={`chip ${headerStyle === h.id ? 'active' : ''}`}
                              onClick={() => { setHeaderStyle(h.id); setSelectedPresetId(''); }}>
                              {h.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Page Layout */}
                      <div>
                        <label className="field-label">Page Layout</label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'single-col', label: 'Single' },
                            { id: 'two-col-left', label: 'Left Sidebar' },
                            { id: 'two-col-right', label: 'Right Sidebar' }
                          ].map(l => (
                            <button key={l.id} className={`chip ${layoutStyle === l.id ? 'active' : ''}`}
                              onClick={() => { setLayoutStyle(l.id); setSelectedPresetId(''); }}>
                              {l.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Typography */}
                      <div>
                        <label className="field-label">Typography</label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { id: 'serif-sans', label: 'Playfair + Inter' },
                            { id: 'sans-sans', label: 'Inter (Pure)' },
                            { id: 'serif-serif', label: 'Playfair (Pure)' },
                            { id: 'mono', label: 'JetBrains Mono' }
                          ].map(f => (
                            <button key={f.id} className={`chip ${fontPair === f.id ? 'active' : ''}`}
                              onClick={() => { setFontPair(f.id); setSelectedPresetId(''); }}>
                              {f.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Section Style */}
                      <div>
                        <label className="field-label">Section Headers</label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { id: 'border-bottom', label: 'Underline' },
                            { id: 'left-indicator', label: 'Left Border' },
                            { id: 'uppercase-pill', label: 'Filled Badge' },
                            { id: 'classic', label: 'Classic Text' }
                          ].map(s => (
                            <button key={s.id} className={`chip ${sectionStyle === s.id ? 'active' : ''}`}
                              onClick={() => { setSectionStyle(s.id); setSelectedPresetId(''); }}>
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Accent Color */}
                      <div>
                        <label className="field-label">Accent Color</label>
                        <div className="flex flex-wrap gap-3 mt-1">
                          {ACCENT_COLORS.map(c => (
                            <button
                              key={c.hex}
                              className={`color-swatch ${accentColor === c.hex ? 'active' : ''}`}
                              style={{ backgroundColor: c.hex }}
                              onClick={() => { setAccentColor(c.hex); setSelectedPresetId(''); }}
                              title={c.name}
                            >
                              {accentColor === c.hex && <Check size={14} className="text-white mx-auto" />}
                            </button>
                          ))}
                          {/* Custom color picker */}
                          <div className="relative">
                            <input
                              type="color" value={accentColor}
                              onChange={e => { setAccentColor(e.target.value); setSelectedPresetId(''); }}
                              className="w-8 h-8 rounded-full border-2 border-[#E8E6E1] cursor-pointer appearance-none"
                              style={{ padding: 0 }}
                              title="Custom color"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Font Size */}
                      <div>
                        <label className="field-label">Text Size</label>
                        <div className="grid grid-cols-3 gap-2">
                          {['small', 'medium', 'large'].map(sz => (
                            <button key={sz} className={`chip ${fontSize === sz ? 'active' : ''}`}
                              onClick={() => { setFontSize(sz); setSelectedPresetId(''); }}>
                              {sz.charAt(0).toUpperCase() + sz.slice(1)}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Icon Toggles */}
                  <div className="card-section space-y-3">
                    <span className="field-label" style={{ marginBottom: 0 }}>Display Options</span>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6B6860]">Section Icons</span>
                      <input type="checkbox" className="toggle-switch" checked={showSectionIcons} onChange={e => setShowSectionIcons(e.target.checked)} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6B6860]">Contact Icons</span>
                      <input type="checkbox" className="toggle-switch" checked={showContactIcons} onChange={e => setShowContactIcons(e.target.checked)} />
                    </div>
                  </div>

                  {/* Section Reordering */}
                  <div className="card-section space-y-3">
                    <span className="field-label" style={{ marginBottom: 0 }}>Section Order</span>
                    <div className="space-y-1.5">
                      {sectionOrder.map((sec, idx) => (
                        <div key={sec} className="flex items-center justify-between bg-white px-3 py-2.5 border border-[#E8E6E1] rounded-lg text-xs font-semibold">
                          <span className="text-[#1A1917]">{SECTION_LABELS[sec] || sec}</span>
                          <div className="flex items-center gap-1">
                            {idx > 0 && <button className="btn-icon" style={{ width: 24, height: 24 }} onClick={() => moveSection(idx, 'up')}><ChevronUp size={12} /></button>}
                            {idx < sectionOrder.length - 1 && <button className="btn-icon" style={{ width: 24, height: 24 }} onClick={() => moveSection(idx, 'down')}><ChevronDown size={12} /></button>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </section>

        {/* ═══════════════════════════════════
            RIGHT PANEL — A4 LIVE PREVIEW
        ═══════════════════════════════════ */}
        <section className={`xl:col-span-7 flex flex-col items-center overflow-y-auto rounded-2xl border border-[#E8E6E1] p-4 sm:p-6 relative ${mobileView !== 'preview' ? 'hidden xl:flex' : ''}`}
          style={{ background: '#F0EFED', height: 'calc(100vh - 120px)', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.03)' }}
        >

          {/* Preview Zoom Toolbar */}
          <div className="w-full flex flex-wrap justify-between items-center mb-4 gap-3 no-print">
            {/* Left: Template name */}
            <div className="flex items-center gap-2 text-[11px] font-medium text-[#9C9890]">
              <Sparkles size={13} style={{ color: accentColor }} />
              <span className="truncate max-w-[150px]">
                {selectedPresetId ? PRESETS_DATABASE.find(p => p.id === selectedPresetId)?.name || 'Custom Design' : 'Custom Design'}
              </span>
            </div>

            {/* Right: Zoom Controls */}
            <div className="flex items-center gap-1.5 bg-white border border-[#E8E6E1] rounded-xl px-2 py-1.5" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <button className="btn-icon" style={{ width: 28, height: 28, border: 'none', borderRadius: 8 }} onClick={zoomOut} title="Zoom Out">
                <ZoomOut size={14} />
              </button>

              {/* Zoom Slider */}
              <input
                type="range"
                min={20} max={200}
                value={Math.round(effectiveZoom * 100)}
                onChange={e => setUserZoom(Number(e.target.value) / 100)}
                className="w-20 sm:w-28 h-1.5 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: '#1A1917', background: '#E8E6E1' }}
                title={`Zoom: ${Math.round(effectiveZoom * 100)}%`}
              />

              <button className="btn-icon" style={{ width: 28, height: 28, border: 'none', borderRadius: 8 }} onClick={zoomIn} title="Zoom In">
                <ZoomIn size={14} />
              </button>

              {/* Percentage */}
              <span className="text-[11px] font-bold text-[#1A1917] w-10 text-center tabular-nums">
                {Math.round(effectiveZoom * 100)}%
              </span>

              <div className="w-px h-5 bg-[#E8E6E1] mx-0.5" />

              <button className="btn-icon" style={{ width: 28, height: 28, border: 'none', borderRadius: 8 }} onClick={zoomFit} title="Fit to Window">
                <Maximize2 size={13} />
              </button>
              <button className="btn-icon" style={{ width: 28, height: 28, border: 'none', borderRadius: 8 }} onClick={zoomReset} title="Reset to 100%">
                <span className="text-[10px] font-bold">1:1</span>
              </button>
            </div>
          </div>

          {/* A4 Scaler Container */}
          <div id="preview-scaler" className="w-full flex justify-center overflow-hidden"
            style={{ height: effectiveZoom < 1 ? `${paperHeight * effectiveZoom}px` : 'auto' }}
          >
            {/* THE A4 PAPER */}
            <div
              id="print-resume-area"
              ref={paperRef}
              className="print-page a4-paper"
              style={{
                width: '210mm',
                fontFamily: fonts.body,
                color: '#1A1917',
                fontSize: sizes.body,
                lineHeight: 1.6,
                padding: '36px 40px',
                transform: `scale(${effectiveZoom})`,
                transformOrigin: 'top center',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Top Bar Decoration */}
              {headerStyle === 'top-bar' && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 5, background: accentColor }} />
              )}

              {/* ── HEADER ── */}
              <header style={{ borderBottom: '1px solid #E8E6E1', paddingBottom: 16, marginBottom: 16 }}>
                {headerStyle !== 'sidebar-photo' ? (
                  <div style={{ display: 'flex', flexDirection: headerStyle === 'split' ? 'row' : 'column', justifyContent: headerStyle === 'split' ? 'space-between' : undefined, alignItems: headerStyle === 'centered' ? 'center' : headerStyle === 'split' ? 'flex-start' : undefined, gap: 12, textAlign: headerStyle === 'centered' ? 'center' : undefined }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: headerStyle === 'centered' ? 'center' : 'flex-start', gap: 4 }}>
                      {photo && headerStyle !== 'split' && (
                        <div style={{ width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', border: '2px solid #F0EFED', marginBottom: 4 }}>
                          <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      )}
                      <h2 style={{ fontFamily: fonts.head, fontSize: sizes.h1, fontWeight: 700, margin: 0, letterSpacing: '-0.01em', color: '#1A1917' }}>
                        {cvData.fullName || 'Your Name'}
                      </h2>
                      <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: accentColor, margin: 0 }}>
                        {cvData.jobTitle || 'Your Title'}
                      </p>
                    </div>

                    {photo && headerStyle === 'split' && (
                      <div style={{ width: 72, height: 72, borderRadius: 12, overflow: 'hidden', border: '1px solid #F0EFED', flexShrink: 0 }}>
                        <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    )}

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: headerStyle === 'centered' ? 'center' : headerStyle === 'split' ? 'flex-end' : 'flex-start', gap: '6px 14px', marginTop: 4 }}>
                      <ContactItem icon={<Mail size={12} />} text={cvData.email} />
                      <ContactItem icon={<Phone size={12} />} text={cvData.phone} />
                      <ContactItem icon={<MapPin size={12} />} text={cvData.location} />
                      <ContactItem icon={<Globe size={12} />} text={cvData.website} />
                    </div>
                  </div>
                ) : (
                  /* Sidebar Photo Layout */
                  <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                    {photo && (
                      <div style={{ width: 80, height: 80, borderRadius: 16, overflow: 'hidden', border: '1px solid #F0EFED', flexShrink: 0 }}>
                        <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    )}
                    <div style={{ flex: 1 }}>
                      <h2 style={{ fontFamily: fonts.head, fontSize: sizes.h1, fontWeight: 700, margin: 0, letterSpacing: '-0.01em' }}>
                        {cvData.fullName || 'Your Name'}
                      </h2>
                      <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: accentColor, margin: '2px 0 6px' }}>
                        {cvData.jobTitle || 'Your Title'}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 12px' }}>
                        <ContactItem icon={<Mail size={11} />} text={cvData.email} />
                        <ContactItem icon={<Phone size={11} />} text={cvData.phone} />
                        <ContactItem icon={<MapPin size={11} />} text={cvData.location} />
                        <ContactItem icon={<Globe size={11} />} text={cvData.website} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Social Links Row */}
                {(cvData.github || cvData.linkedin || cvData.twitter) && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: headerStyle === 'centered' ? 'center' : 'flex-start', gap: '4px 14px', marginTop: 8, fontSize: '9px', color: '#9C9890' }}>
                    {cvData.github && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>{showContactIcons && <GithubIcon className="w-3 h-3" style={{ color: accentColor }} />}{cvData.github}</span>}
                    {cvData.linkedin && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>{showContactIcons && <LinkedinIcon className="w-3 h-3" style={{ color: accentColor }} />}{cvData.linkedin}</span>}
                    {cvData.twitter && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>{showContactIcons && <TwitterIcon className="w-3 h-3" style={{ color: accentColor }} />}{cvData.twitter}</span>}
                  </div>
                )}
              </header>

              {/* ── BODY SECTIONS ── */}
              <div style={{ flex: 1 }}>
                {layoutStyle === 'single-col' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {sectionOrder.map(sec => renderSection(sec, false))}
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24 }}>
                    <div style={{
                      order: layoutStyle === 'two-col-right' ? 2 : 0,
                      borderLeft: layoutStyle === 'two-col-right' ? '1px solid #F0EFED' : 'none',
                      borderRight: layoutStyle === 'two-col-left' ? '1px solid #F0EFED' : 'none',
                      paddingLeft: layoutStyle === 'two-col-right' ? 16 : 0,
                      paddingRight: layoutStyle === 'two-col-left' ? 16 : 0,
                      display: 'flex', flexDirection: 'column', gap: 8
                    }}>
                      {sectionOrder.filter(s => ['skills', 'languages', 'awards'].includes(s)).map(sec => renderSection(sec, true))}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {sectionOrder.filter(s => ['summary', 'experiences', 'projects', 'educations'].includes(s)).map(sec => renderSection(sec, false))}
                    </div>
                  </div>
                )}
              </div>

              {/* ── FOOTER ── */}
              <div style={{ marginTop: 20, paddingTop: 10, borderTop: '1px solid #F0EFED', fontSize: '8px', color: '#B8B3AA', display: 'flex', justifyContent: 'space-between', fontFamily: "'Inter', sans-serif" }}>
                <span>&copy; {new Date().getFullYear()} {cvData.fullName || 'VitaStudio'}. All Rights Reserved.</span>
                <span>Built with VitaStudio</span>
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="no-print border-t border-[#E8E6E1] bg-white/60 backdrop-blur-sm py-6">
        <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <div className="text-sm font-bold text-[#1A1917]">
              VITA<span style={{ color: accentColor }}>STUDIO</span>
            </div>
            <div className="text-xs text-[#9C9890]">
              &copy; {new Date().getFullYear()} <strong className="text-[#1A1917] font-semibold">Eng. Yazan Saadeh</strong> — All Rights Reserved.
            </div>
          </div>

          {/* Contact & Repository Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <a href="https://github.com/8bbxc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#5C5A54] hover:text-[#1A1917] transition-all bg-[#F3F1ED] hover:bg-[#EAE8E3] px-3.5 py-2 rounded-full font-semibold">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub: @8bbxc</span>
            </a>
            <a href="https://github.com/8bbxc/vitastudio-cv-builder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#5C5A54] hover:text-[#1A1917] transition-all bg-[#F3F1ED] hover:bg-[#EAE8E3] px-3.5 py-2 rounded-full font-semibold">
              <FolderGit className="w-3.5 h-3.5" />
              <span>Repository</span>
            </a>
            <a href="https://instagram.com/eng.yazan46" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#5C5A54] hover:text-[#D62976] transition-all bg-[#F3F1ED] hover:bg-[#FCECF3] px-3.5 py-2 rounded-full font-semibold">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram: @eng.yazan46</span>
            </a>
            <a href="https://wa.me/970568203031" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#5C5A54] hover:text-[#25D366] transition-all bg-[#F3F1ED] hover:bg-[#EAF9EE] px-3.5 py-2 rounded-full font-semibold">
              <WhatsappIcon className="w-3.5 h-3.5" />
              <span>WhatsApp: +970 568 203 031</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[10px] text-[#B8B3AA] font-semibold">
            <span>React + TS</span>
            <span className="w-1 h-1 rounded-full bg-[#D6D3CD]" />
            <span>Tailwind v4</span>
            <span className="w-1 h-1 rounded-full bg-[#D6D3CD]" />
            <span>Framer Motion</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
