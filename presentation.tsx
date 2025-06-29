"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Target,
  Zap,
  CheckCircle,
  Rocket,
  Building,
  Code,
  Settings,
  TrendingUp,
  BookOpen,
  Star,
  Circle,
  Beaker,
  Database,
  GitBranch,
  Clock,
  BarChart,
  PiggyBank,
  Laptop2,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const HighlightedName = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-purple-300">{children}</strong>
);

const slides = [
  {
    id: 1,
    title: "Bilan Stage PFE",
    subtitle: "Adnane Idili - Revue Mi-Parcours",
    type: "title",
    content: {
      role: "Développeur MuleSoft & Salesforce Core",
      period: "Stage de Fin d'Études",
      supervisor: <>Sous la supervision d'<HighlightedName>Abdelhay</HighlightedName></>,
    },
  },
  {
    id: 2,
    title: "Contexte du Stage",
    subtitle: "PFA vs PFE",
    type: "context",
    content: {
      pfa: {
        title: "Stage PFA",
        items: ["Expérience sur Salesforce Marketing Cloud", "Travail sur les journeys", "Développement d'emails"],
      },
      pfe: {
        title: "Stage PFE",
        items: ["Élargissement des horizons", "Développeur MuleSoft", "Spécialisation Salesforce Core"],
      },
    },
  },
  {
    id: 3,
    title: "Avant Mon Arrivée",
    subtitle: "Problématiques Identifiées",
    type: "problems",
    content: {
      issues: [
        "Équipe concentrée sur Salesforce Marketing Cloud",
        "Manque de ressources Salesforce Core",
        "Dépendances et blocages techniques fréquents",
        "Abdelhay surchargé de tâches",
        "Profils MuleSoft + Salesforce Core rares",
        "Besoin d'une vision intégration + développement",
      ],
    },
  },
  {
    id: 4,
    title: "À Mon Arrivée",
    subtitle: "Valeur Ajoutée & Objectifs",
    type: "value",
    content: {
      objective: "Formation efficace pour autonomie sur Salesforce Core et Apex",
      training: [
        "Montée en compétence MuleSoft (Anypoint, Studio, Runtime)",
        "Modules Salesforce Admin Beginner (Trailhead)",
        "Developer Beginner → Intermediate",
        "Superbadge Apex Specialist",
        <>Points d'onboarding réguliers avec <HighlightedName>Abdelhay</HighlightedName></>,
      ],
    },
  },
  {
    id: 5,
    title: "État Actuel d'avancement",
    subtitle: "Réalisations Clés",
    type: "current",
    content: {
      status: "Phase Salesforce Core finalisée",
      achievements: [
        "Intégration systèmes externes",
        "Logique métier Apex",
        "Gestion conformité RGPD",
        "Premier Share & Learn réalisé",
        "Préparation certification Developer I",
      ],
    },
  },
  {
    id: 6,
    title: "Nouvelle Phase",
    subtitle: "Test & Implementation",
    type: "newphase",
    content: {
      current: "Phase de Test Implementation",
      tasks: [
        "Tester la solution actuelle",
        "Interaction avec Cegid et Shopify",
        <>Collaboration avec <HighlightedName>Abdessamad</HighlightedName></>,
        "Deuxième Share & Learn en préparation",
      ],
    },
  },
  {
    id: 7,
    title: "Squad Interne",
    subtitle: "Power Rangers ( MIS )",
    type: "squad_ops",
    content: {
      operations: [
        "Gestion des demandes d'équipement",
        "Benchmarking des laptops pour nouveaux arrivants",
        "Négociation avec les fournisseurs",
        "Suivi des commandes et livraisons"
      ],
      achievements: [
        "Optimisation des coûts via partenariat UNO",
        "Standardisation des processus d'acquisition",
        "Réduction du temps de traitement des demandes",
        "Amélioration de la satisfaction utilisateur"
      ]
    },
  },
  {
    id: 8,
    title: "Squad Interne",
    subtitle: "Laptop Recommendation Platform",
    type: "squad_platform",
    content: {
      platform: {
        entry: [
          "Questionnaire intelligent",
          "Analyse du profil utilisateur",
          "Identification des besoins techniques"
        ],
        features: [
          "Matching profil-toolkit automatisé",
          "Recommandations personnalisées",
          "Comparaison des options"
        ],
        management: [
          "Base de données équipements",
          "Suivi des commandes",
          "Intégration Notion"
        ]
      },
      url: "laptop-recommandation.vercel.app"
    },
  },
  {
    id: 9,
    title: "Prochaines Étapes",
    subtitle: "Roadmap & Objectifs",
    type: "next",
    content: {
      steps: [
        "Obtenir certification Salesforce Developer I",
        "Réaliser deuxième Share & Learn",
        "Approfondir compétences Salesforce Core & MuleSoft",
        "Participer à la rédaction documentation technique",
      ],
    },
  },
]

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showPreview, setShowPreview] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'n') {
        if (currentSlide < slides.length - 1) nextSlide()
      } else if (event.key.toLowerCase() === 'b') {
        if (currentSlide > 0) prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide])

  const slide = slides[currentSlide]

  const PlatformPreview = () => (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center ${showPreview ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
      onClick={() => setShowPreview(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      {/* Modal Content */}
      <div 
        className="relative bg-[#1a1f2d] rounded-lg shadow-2xl border border-blue-500/20 p-3 w-[90vw] max-w-[1200px] max-h-[80vh] transform scale-[0.98] transition-transform duration-300 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Browser Chrome */}
        <div className="bg-slate-900 rounded-t-lg p-2 flex items-center gap-2 border-b border-slate-700">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex-1 text-center">
            <p className="text-xs text-slate-400 font-mono truncate px-2">laptop-recommandation.vercel.app</p>
          </div>
          <a 
            href="https://laptop-recommandation.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        
        {/* Website Iframe */}
        <div className="w-full bg-white rounded-b-lg overflow-hidden">
          <iframe
            src="https://laptop-recommandation.vercel.app"
            className="w-full h-[65vh]"
            frameBorder="0"
            title="Laptop Recommendation Platform"
          />
        </div>
      </div>
    </div>
  )

  const renderSlideContent = () => {
    switch (slide.type) {
      case "title":
        return (
          <div className="flex flex-col items-center justify-center min-h-[600px] text-center relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400/25 to-violet-400/25 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-violet-400/25 to-fuchsia-400/25 rounded-full blur-xl"></div>

            <div className="space-y-12 relative z-10">
              <div className="space-y-6">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-2xl text-slate-200 font-medium">{slide.subtitle}</p>
            </div>

              <div className="space-y-6">
              <Badge
                variant="outline"
                className="text-lg px-6 py-3 bg-gradient-to-r from-purple-600/80 to-violet-600/80 border-purple-400/50 text-white backdrop-blur-sm shadow-lg"
              >
                <Code className="w-5 h-5 mr-2" />
                  {slide.content?.role}
              </Badge>
                <p className="text-slate-200 text-lg">{slide.content?.period}</p>
                <p className="text-slate-300">{slide.content?.supervisor}</p>
              </div>
            </div>
          </div>
        )

      case "context":
        return (
          <div className="space-y-12">
            {/* Introduction paragraph */}
            <div className="bg-[#1a1f2d]/70 rounded-xl p-6 backdrop-blur-sm border border-slate-500/10">
              <p className="text-slate-200 leading-relaxed text-lg">
                Mon parcours chez Reetain illustre une évolution significative, passant d'une expertise en Marketing Cloud lors de mon PFA à une double compétence technique pour mon PFE. Cette transition reflète ma volonté d'acquérir une compréhension plus approfondie de l'écosystème Salesforce, en combinant le développement MuleSoft avec la maîtrise de Salesforce Core.
              </p>
            </div>

            {/* Cards container */}
            <div className="grid md:grid-cols-2 gap-12 relative">
              {/* PFA Side */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl"></div>
                <Card className="border-0 bg-[#1a1f2d]/90 shadow-lg backdrop-blur-sm border border-blue-500/10 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#1a1f2d]/95">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-blue-100 text-xl font-semibold">
                      <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
                      {slide.content?.pfa?.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                    <ul className="space-y-4">
                      {slide.content?.pfa?.items?.map((item, index) => (
                        <li key={index} className="flex items-start group">
                          <div className="mt-1.5 mr-4 w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-300 transition-colors"></div>
                          <span className="text-slate-200 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
              </div>

              {/* Connecting Arrow */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* PFE Side */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl"></div>
                <Card className="border-0 bg-[#1a1f2d]/90 shadow-lg backdrop-blur-sm border border-purple-500/10 transition-all duration-300 hover:border-purple-400/30 hover:bg-[#1a1f2d]/95">
              <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-purple-100 text-xl font-semibold">
                      <Rocket className="w-6 h-6 mr-3 text-purple-400" />
                      {slide.content?.pfe?.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                    <ul className="space-y-4">
                      {slide.content?.pfe?.items?.map((item, index) => (
                        <li key={index} className="flex items-start group">
                          <div className="mt-1.5 mr-4 w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-purple-300 transition-colors"></div>
                          <span className="text-slate-200 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
              </div>
            </div>
          </div>
        )

      case "problems":
        return (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-[#1a1f2d]/70 rounded-xl p-6 backdrop-blur-sm border border-slate-500/10">
              <p className="text-slate-200 leading-relaxed text-lg">
                L'équipe faisait face à plusieurs défis stratégiques, notamment une concentration des compétences sur Marketing Cloud et un besoin croissant d'expertise en développement et intégration.
              </p>
            </div>

            {/* Challenges Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Technical Challenges */}
              <Card className="border-0 bg-[#1a1f2d]/90 shadow-lg backdrop-blur-sm border border-red-500/10">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-red-200 text-xl">
                    <Code className="w-6 h-6 mr-3 text-red-400" />
                    Défis Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start p-3 bg-[#1a1f2d]/80 rounded-lg border border-slate-500/10 group hover:bg-[#1a1f2d]/95 transition-all">
                    <Settings className="w-5 h-5 mr-3 mt-1 text-red-400/90 flex-shrink-0" />
                    <span className="text-slate-200 leading-relaxed">Dépendances et blocages techniques fréquents</span>
                  </div>
                  <div className="flex items-start p-3 bg-[#1a1f2d]/80 rounded-lg border border-slate-500/10 group hover:bg-[#1a1f2d]/95 transition-all">
                    <Users className="w-5 h-5 mr-3 mt-1 text-red-400/90 flex-shrink-0" />
                    <span className="text-slate-200 leading-relaxed">Équipe concentrée sur Salesforce Marketing Cloud</span>
                  </div>
                  <div className="flex items-start p-3 bg-[#1a1f2d]/80 rounded-lg border border-slate-500/10 group hover:bg-[#1a1f2d]/95 transition-all">
                    <BookOpen className="w-5 h-5 mr-3 mt-1 text-red-400/90 flex-shrink-0" />
                    <span className="text-slate-200 leading-relaxed">Manque de ressources Salesforce Core et MuleSoft</span>
                  </div>
                </CardContent>
              </Card>

              {/* Strategic Challenges */}
              <Card className="border-0 bg-[#1a1f2d]/90 shadow-lg backdrop-blur-sm border border-orange-500/10">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-orange-200 text-xl">
                    <Target className="w-6 h-6 mr-3 text-orange-400" />
                    Enjeux Stratégiques
              </CardTitle>
            </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start p-3 bg-[#1a1f2d]/80 rounded-lg border border-slate-500/10 group hover:bg-[#1a1f2d]/95 transition-all">
                    <TrendingUp className="w-5 h-5 mr-3 mt-1 text-orange-400/90 flex-shrink-0" />
                    <span className="text-slate-200 leading-relaxed">Profils MuleSoft + Salesforce Core rares</span>
                  </div>
                  <div className="flex items-start p-3 bg-[#1a1f2d]/80 rounded-lg border border-slate-500/10 group hover:bg-[#1a1f2d]/95 transition-all">
                    <Zap className="w-5 h-5 mr-3 mt-1 text-orange-400/90 flex-shrink-0" />
                    <span className="text-slate-200 leading-relaxed">Besoin d'une vision intégration + développement</span>
                  </div>
                  <div className="flex items-start p-3 bg-[#1a1f2d]/80 rounded-lg border border-slate-500/10 group hover:bg-[#1a1f2d]/95 transition-all">
                    <Building className="w-5 h-5 mr-3 mt-1 text-orange-400/90 flex-shrink-0" />
                    <span className="text-slate-200 leading-relaxed">Abdelhay surchargé de tâches</span>
              </div>
            </CardContent>
          </Card>
            </div>
          </div>
        )

      case "value":
        return (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-[#1a1f2d]/70 rounded-xl p-6 backdrop-blur-sm border border-slate-500/10 mb-12">
              <p className="text-slate-200 leading-relaxed text-lg">
                Mon parcours de formation combine deux axes majeurs, permettant d'acquérir une double expertise technique essentielle pour l'équipe.
              </p>
            </div>

            {/* Training Tracks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* MuleSoft Track */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-blue-400">Parcours MuleSoft</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#1a1f2d] p-4 rounded-lg border border-blue-500/20 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-200">Anypoint Platform</span>
                  </div>
                  <div className="bg-[#1a1f2d] p-4 rounded-lg border border-blue-500/20 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-200">Anypoint Studio</span>
                  </div>
                  <div className="bg-[#1a1f2d] p-4 rounded-lg border border-blue-500/20 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-200">Mule Runtime</span>
                  </div>
                  <div className="bg-[#1a1f2d] p-4 rounded-lg border border-blue-500/20 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-200">Cas d'usage réels</span>
                  </div>
                </div>
              </div>

              {/* Salesforce Track */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-purple-400">Parcours Salesforce Core</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#1a1f2d] p-4 rounded-lg border border-purple-500/20 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-200">Admin Beginner</span>
                  </div>
                  <div className="bg-[#1a1f2d] p-4 rounded-lg border border-purple-500/20 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-200">Developer Beginner</span>
                  </div>
                  <div className="bg-[#1a1f2d] p-4 rounded-lg border border-purple-500/20 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-200">Developer Intermediate</span>
                  </div>
                  <div className="bg-[#1a1f2d] p-4 rounded-lg border border-purple-500/20 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-200">Superbadge Apex Specialist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="mt-8 bg-[#1a1f2d] p-6 rounded-lg border border-slate-500/10">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <h3 className="text-lg font-medium text-emerald-400">Support Continu</h3>
              </div>
              <p className="text-slate-300 text-center">
                Points d'onboarding réguliers avec <HighlightedName>Abdelhay</HighlightedName> pour suivre la progression et lever les blocages
              </p>
            </div>
          </div>
        )

      case "current":
        return (
          <div className="space-y-8">
            {/* AMI Paris - Main Project */}
            <div className="bg-[#1a1f2d] rounded-xl p-6 border border-slate-500/10">
              <div className="flex items-center space-x-4 mb-6">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-200">Mission AMI Paris</h3>
                  <p className="text-slate-400 mt-1">Salesforce Core</p>
                  <p className="text-slate-400 mt-1">Projet: Amigo Client Engagement</p>
                </div>
              </div>
              
              <div className="space-y-4 ml-10">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-300">Intégration des Orders & Order Line Items depuis Cegid Y2 et Shopify</span>
                    <p className="text-sm text-slate-400 mt-1">Synchronisation et gestion des commandes multi-sources</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-300">Automatisation RGPD pour l'anonymisation des données</span>
                    <p className="text-sm text-slate-400 mt-1">Gestion automatique des clients et prospects inactifs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-300">Développement des Mappings pour systèmes externes</span>
                    <p className="text-sm text-slate-400 mt-1">En collaboration avec <HighlightedName>Abdessamad</HighlightedName></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arthus Bertrand - Parallel Mission */}
            <div className="bg-[#1a1f2d] rounded-xl p-6 border border-slate-500/10">
              <div className="flex items-center space-x-4 mb-6">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-200">Mission Arthus Bertrand</h3>
                  <p className="text-slate-400 mt-1">MuleSoft</p>
                  <p className="text-slate-400 mt-1">Projet: Lookup Cegid - Système de Détection des Doublons</p>
                </div>
              </div>
              
              <div className="space-y-4 ml-10">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Mise en place API de détection des doublons</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Implémentation des règles de matching</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Sécurisation des échanges de données</span>
                </div>
              </div>
            </div>

            {/* Additional Progress */}
            <div className="bg-[#1a1f2d] rounded-xl p-6 border border-slate-500/10">
              <h4 className="text-lg font-medium text-slate-200 mb-4">Formation & Partage de Connaissances</h4>
              <div className="space-y-4 ml-10">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <div>
                    <span className="text-slate-300">Premier Share & Learn réalisé</span>
                    <p className="text-sm text-slate-400 mt-1">Deuxième en cours de préparation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <div>
                    <span className="text-slate-300">Certification Developer I</span>
                    <p className="text-sm text-slate-400 mt-1">Préparation en cours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "newphase":
        return (
          <div className="space-y-8">
            {/* AMI Paris - Main Project */}
            <div className="bg-[#1a1f2d] rounded-xl p-6 border border-slate-500/10">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-6">
                  <Settings className="w-7 h-7 text-blue-400 mt-0" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-200">Mission AMI Paris</h3>
                  <p className="text-slate-400 mt-1">Phase de Test</p>
                  <p className="text-slate-400 mt-1">Projet: Amigo Client Engagement</p>
                  <p className="text-sm text-slate-400 mt-1">En collaboration avec <HighlightedName>Abdessamad</HighlightedName></p>
                </div>
              </div>
              
              <div className="space-y-4 ml-11">
                <div className="flex items-start">
                  <Circle className="w-2 h-2 text-blue-400 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-slate-300">Validation de l'intégration avec Cegid et Shopify</span>
                </div>
                <div className="flex items-start">
                  <Circle className="w-2 h-2 text-blue-400 mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-slate-300">Création des classes de test et préparation au déploiement en production</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Arthus Bertrand - Parallel Mission */}
            <div className="bg-[#1a1f2d] rounded-xl p-6 border border-slate-500/10">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-6">
                  <TrendingUp className="w-7 h-7 text-purple-400 mt-0" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-200">Mission Arthus Bertrand</h3>
                  <p className="text-slate-400 mt-1">Phase d'Évolution</p>
                  <p className="text-slate-400 mt-1">Projet: Lookup Cegid - Système de Détection des Doublons</p>
                </div>
              </div>
              
              <div className="space-y-4 ml-11">
                <div className="flex items-start">
                  <Circle className="w-2 h-2 text-purple-400 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-slate-300">Amélioration de la gestion des adresses clients multi-sources</span>
                </div>
                <div className="flex items-start">
                  <Circle className="w-2 h-2 text-purple-400 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-slate-300">Standardisation du format des adresses internationales</span>
                </div>
                <div className="flex items-start">
                  <Circle className="w-2 h-2 text-purple-400 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-slate-300">Optimisation de la traçabilité des données clients</span>
                </div>
              </div>
            </div>
          </div>
        )

      case "squad_ops":
        return (
          <div className="space-y-8">
            {/* Main Operations Card */}
            <Card className="border-0 bg-[#1a1f2d]/95 shadow-xl backdrop-blur-sm border-l-4 border-l-orange-400 border border-orange-500/10 p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-orange-100 text-2xl">
                  <Building className="w-7 h-7 mr-4 text-orange-400" />
                  Gestion des Équipements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start bg-[#1a1f2d]/80 p-4 rounded-lg border border-orange-500/10">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-400/10 flex items-center justify-center mr-4">
                        <span className="text-orange-400 font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="text-slate-200 font-medium mb-2">Réception et Évaluation</h4>
                        <ul className="space-y-2 text-slate-300 text-sm">
                          <li className="flex items-center">
                            <Circle className="w-1.5 h-1.5 mr-2 text-orange-400" />
                            Point de contact principal pour les demandes d'équipement
                          </li>
                          <li className="flex items-center">
                            <Circle className="w-1.5 h-1.5 mr-2 text-orange-400" />
                            Évaluation des besoins spécifiques
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start bg-[#1a1f2d]/80 p-4 rounded-lg border border-orange-500/10">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-400/10 flex items-center justify-center mr-4">
                        <span className="text-orange-400 font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="text-slate-200 font-medium mb-2">Sourcing et Devis</h4>
                        <ul className="space-y-2 text-slate-300 text-sm">
                          <li className="flex items-center">
                            <Circle className="w-1.5 h-1.5 mr-2 text-orange-400" />
                            Obtention et comparaison des devis
                          </li>
                          <li className="flex items-center">
                            <Circle className="w-1.5 h-1.5 mr-2 text-orange-400" />
                            Sélection des périphériques adaptés
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start bg-[#1a1f2d]/80 p-4 rounded-lg border border-orange-500/10">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-400/10 flex items-center justify-center mr-4">
                        <span className="text-orange-400 font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="text-slate-200 font-medium mb-2">Suivi et Livraison</h4>
                        <ul className="space-y-2 text-slate-300 text-sm">
                          <li className="flex items-center">
                            <Circle className="w-1.5 h-1.5 mr-2 text-orange-400" />
                            Gestion de la commande jusqu'à la livraison
                          </li>
                          <li className="flex items-center">
                            <Circle className="w-1.5 h-1.5 mr-2 text-orange-400" />
                            Coordination avec les fournisseurs
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements Card */}
            <Card className="border-0 bg-[#1a1f2d]/90 shadow-lg backdrop-blur-sm border border-emerald-500/10 p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-emerald-100 text-xl">
                  <Target className="w-6 h-6 mr-3 text-emerald-400" />
                  Réalisations Concrètes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-[#1a1f2d]/80 p-4 rounded-lg border border-emerald-500/10">
                    <h4 className="text-emerald-200 font-medium mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-emerald-400" />
                      Configuration et mise en place des Ordinateurs
                    </h4>
                    <ul className="space-y-2 ml-7">
                      <li className="text-slate-300 flex items-center">
                        <Circle className="w-1.5 h-1.5 mr-2 text-emerald-400" />
                        Setup complet pour Abdessamad
                      </li>
                      <li className="text-slate-300 flex items-center">
                        <Circle className="w-1.5 h-1.5 mr-2 text-emerald-400" />
                        Setup complet pour Tachafine
                    </li>
                </ul>
                  </div>

                  
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "squad_platform":
        return (
          <div className="space-y-8">
            {/* Platform Overview */}
            <Card className="border-0 bg-[#1a1f2d]/95 shadow-xl backdrop-blur-sm border border-blue-500/10 p-8 relative">
              <div className="space-y-8">
                <div 
                  className="flex items-center space-x-5 cursor-pointer group"
                  onClick={() => setShowPreview(true)}
                >
                  <Laptop2 className="w-6 h-6 text-blue-400" />
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors">Laptop Recommendation Platform</h3>
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-sm text-slate-400 font-mono">{slide.content?.url}</p>
                  </div>
                </div>

                <div className="space-y-6 ml-10">
                  <p className="text-base text-slate-300 leading-relaxed">
                    Plateforme web développée pour la Squad Interne (MIS) visant à simplifier et optimiser le processus d'attribution des équipements informatiques.
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-start space-x-4">
                      <Circle className="w-1.5 h-1.5 mt-2 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-300">Centralisation des demandes et automatisation des recommandations basées sur les profils utilisateurs</span>
                    </li>
                    <li className="flex items-start space-x-4">
                      <Circle className="w-1.5 h-1.5 mt-2 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-300">Réduction significative du temps de traitement et standardisation des processus d'équipement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Core Features Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-0 bg-[#1a1f2d]/90 shadow-lg backdrop-blur-sm border border-blue-500/10 p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-blue-100 text-lg">
                    <Database className="w-5 h-5 mr-3 text-blue-400" />
                    Gestion des Données
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-200">
                      <Circle className="w-1.5 h-1.5 mr-2 text-blue-400" />
                      Base de données centralisée
                    </li>
                    <li className="flex items-center text-slate-200">
                      <Circle className="w-1.5 h-1.5 mr-2 text-blue-400" />
                      Intégration avec Notion
                    </li>
                    <li className="flex items-center text-slate-200">
                      <Circle className="w-1.5 h-1.5 mr-2 text-blue-400" />
                      Historique des configurations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-[#1a1f2d]/90 shadow-lg backdrop-blur-sm border border-purple-500/10 p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-purple-100 text-lg">
                    <Settings className="w-5 h-5 mr-3 text-purple-400" />
                    Automatisation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-200">
                      <Circle className="w-1.5 h-1.5 mr-2 text-purple-400" />
                      Système de matching automatisé
                    </li>
                    <li className="flex items-center text-slate-200">
                      <Circle className="w-1.5 h-1.5 mr-2 text-purple-400" />
                      Génération des devis
                    </li>
                    <li className="flex items-center text-slate-200">
                      <Circle className="w-1.5 h-1.5 mr-2 text-purple-400" />
                      Suivi des commandes
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-[#1a1f2d]/90 shadow-lg backdrop-blur-sm border border-indigo-500/10 p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-indigo-100 text-lg">
                    <Users className="w-5 h-5 mr-3 text-indigo-400" />
                    Expérience Utilisateur
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-200">
                      <Circle className="w-1.5 h-1.5 mr-2 text-indigo-400" />
                      Interface intuitive
                    </li>
                    <li className="flex items-center text-slate-200">
                      <Circle className="w-1.5 h-1.5 mr-2 text-indigo-400" />
                      Recommandations personnalisées
                    </li>
                    <li className="flex items-center text-slate-200">
                      <Circle className="w-1.5 h-1.5 mr-2 text-indigo-400" />
                      Documentation accessible
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Survey Flow (Compact) */}
            <Card className="border-0 bg-[#1a1f2d]/90 shadow-lg backdrop-blur-sm border border-emerald-500/10 p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-emerald-100 text-lg">
                  <GitBranch className="w-5 h-5 mr-3 text-emerald-400" />
                  Processus de Recommandation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-start">
                  <div className="flex-1 relative">
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-[2px] bg-emerald-400"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-45 w-2 h-[2px] bg-emerald-400"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -rotate-45 w-2 h-[2px] bg-emerald-400"></div>
                    </div>
                    <div className="bg-[#1a1f2d]/80 p-4 rounded-lg border border-emerald-500/10">
                      <h4 className="text-emerald-200 font-medium mb-2">Questionnaire Initial</h4>
                      <p className="text-slate-300 text-sm">Collecte des informations et besoins</p>
                    </div>
                  </div>

                  <div className="flex-1 relative mx-8">
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-[2px] bg-emerald-400"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-45 w-2 h-[2px] bg-emerald-400"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -rotate-45 w-2 h-[2px] bg-emerald-400"></div>
                    </div>
                    <div className="bg-[#1a1f2d]/80 p-4 rounded-lg border border-emerald-500/10">
                      <h4 className="text-emerald-200 font-medium mb-2">Analyse du Profil</h4>
                      <p className="text-slate-300 text-sm">Matching et optimisation</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="bg-[#1a1f2d]/80 p-4 rounded-lg border border-emerald-500/10">
                      <h4 className="text-emerald-200 font-medium mb-2">Recommandations</h4>
                      <p className="text-slate-300 text-sm">Configuration et mise en place</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-0 bg-[#1a1f2d]/90 shadow-lg backdrop-blur-sm border border-orange-500/10 p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-orange-100 text-lg">
                  <Target className="w-5 h-5 mr-3 text-orange-400" />
                  Impact & Bénéfices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-slate-200">Réduction du temps de traitement</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-slate-200">Standardisation des processus</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-slate-200">Précision des recommandations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <PiggyBank className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-slate-200">Optimisation budgétaire</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Platform Preview Modal */}
            <PlatformPreview />
          </div>
        )

      case "next":
        return (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-[#1a1f2d]/70 rounded-xl p-6 backdrop-blur-sm border border-slate-500/10 mb-8">
              <p className="text-slate-200 leading-relaxed text-lg">
                Mon parcours continue avec des objectifs clairs pour approfondir mes compétences et maximiser mon impact au sein de l'équipe.
              </p>
            </div>

            {/* Short Term Goals */}
            <Card className="border-0 bg-[#1a1f2d]/90 shadow-lg backdrop-blur-sm border border-indigo-500/10">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center text-indigo-200 text-xl">
                  <Target className="w-6 h-6 mr-3 text-indigo-400" />
                  Objectifs Immédiats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="flex items-start p-5 bg-[#1a1f2d]/80 backdrop-blur-sm rounded-xl border border-indigo-500/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 text-white rounded-lg mr-4 flex-shrink-0 shadow-lg">
                      <Star className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">Certification Salesforce Developer I</h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full w-[30%] bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                        </div>
                        <span className="text-indigo-300 font-medium">30%</span>
                      </div>
                      <p className="text-slate-400 text-sm">Préparation en cours</p>
                    </div>
                  </div>

                  <div className="flex items-start p-5 bg-[#1a1f2d]/80 backdrop-blur-sm rounded-xl border border-purple-500/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-400 to-fuchsia-400 text-white rounded-lg mr-4 flex-shrink-0 shadow-lg">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">Share & Learn #2</h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full w-[40%] bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full"></div>
                        </div>
                        <span className="text-purple-300 font-medium">40%</span>
                      </div>
                      <p className="text-slate-400 text-sm">En cours de préparation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Long Term Vision */}
            <Card className="border-0 bg-[#1a1f2d]/90 shadow-lg backdrop-blur-sm border border-blue-500/10">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center text-blue-200 text-xl">
                  <Rocket className="w-6 h-6 mr-3 text-blue-400" />
                  Vision à Long Terme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-blue-100 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-blue-400" />
                      Expertise Technique
                    </h3>
                    <div className="space-y-3 ml-7">
                      <div className="flex items-center space-x-3">
                        <Circle className="w-1.5 h-1.5 text-blue-400" />
                        <span className="text-slate-300">Approfondissement Salesforce Core</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Circle className="w-1.5 h-1.5 text-blue-400" />
                        <span className="text-slate-300">Maîtrise avancée de MuleSoft</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Circle className="w-1.5 h-1.5 text-blue-400" />
                        <span className="text-slate-300">Architecture des intégrations</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-blue-100 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                      Documentation & Partage
                    </h3>
                    <div className="space-y-3 ml-7">
                      <div className="flex items-center space-x-3">
                        <Circle className="w-1.5 h-1.5 text-blue-400" />
                        <span className="text-slate-300">Documentation technique complète</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Circle className="w-1.5 h-1.5 text-blue-400" />
                        <span className="text-slate-300">Guides de bonnes pratiques</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Circle className="w-1.5 h-1.5 text-blue-400" />
                        <span className="text-slate-300">Partage des connaissances acquises</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(35,45,47)] relative overflow-hidden">
      {/* Navigation and Logo - Absolute Position */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="bg-[#1a2426]/50 hover:bg-[#1a2426] border-[#62EF92]/20 text-white w-8 h-8 p-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="bg-[#1a2426]/50 hover:bg-[#1a2426] border-[#62EF92]/20 text-white w-8 h-8 p-0"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="w-[270px]">
          <Image
            src="/images/reetain-logo.png"
            alt="Reetain Logo"
            width={1920}
            height={1080}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #62EF92 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, rgba(98, 239, 146, 0.5) 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#62EF92]/10 to-[#62EF92]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#62EF92]/10 to-[#62EF92]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#62EF92]/5 to-[#62EF92]/3 rounded-full blur-3xl"></div>

      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center py-6 px-4">
        <div className="w-full max-w-7xl mx-auto">
          {/* Slide Counter */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-[#1a2426] rounded-full border border-[#62EF92]/20">
              <span className="text-sm text-white">Slide {currentSlide + 1} of {slides.length}</span>
            </div>
          </div>

          {/* Slide Content */}
          <div className="bg-[#1a2426]/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#62EF92]/20 p-10 min-h-[700px] relative overflow-hidden">
            {/* Slide decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#62EF92]/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#62EF92]/10 to-transparent rounded-tr-full"></div>

            {/* Reetain Short Logo - Consistent Position */}
            <div className="absolute bottom-6 right-6 z-20">
              <Image
                src="/images/Reetain Short Logotypes Variety RVB-03.png"
                alt="Reetain Short Logo"
                width={60}
                height={60}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="relative z-10">
              {slide.type === "title" ? (
                <div className="flex flex-col items-center justify-center min-h-[600px] text-center">
                  <h1 className="text-6xl font-bold text-white mb-4">
                    Bilan Stage <span className="text-[#62EF92]">PFE</span>
                  </h1>
                  <p className="text-2xl text-white/90 mb-8">{slide.subtitle}</p>
                  <Badge
                    variant="outline"
                    className="text-lg px-6 py-3 bg-[#62EF92] text-[#1a2426] border-none font-medium"
                  >
                    <Code className="w-5 h-5 mr-2" />
                    {slide.content?.role}
                  </Badge>
                  <p className="text-white/80 mt-8 text-lg">{slide.content?.period}</p>
                  <p className="text-white/70 mt-2">
                    Sous la supervision d'<span className="text-[#62EF92]">Abdelhay</span>
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="text-4xl font-bold text-white mb-3">{slide.title}</h2>
                    <p className="text-xl text-[#62EF92]">{slide.subtitle}</p>
                  </div>

                  {renderSlideContent()}
                </>
              )}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#62EF92] scale-125"
                    : "bg-[#62EF92]/20 hover:bg-[#62EF92]/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
