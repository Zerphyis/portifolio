// data.js

export const personalInfo = {
  name: "Seu Nome",
  role: "Engenheiro de Software Back-end",
  bio: "Desenvolvedor back-end especializado na criação de APIs robustas, sistemas escaláveis e arquiteturas eficientes. Apaixonado por resolver problemas complexos e criar soluções de alto desempenho.",
  email: "seu.email@exemplo.com",
  phone: "+55 (11) 98765-4321",
  location: "São Paulo, SP - Brasil",
  github: "https://github.com/seu-usuario",
  linkedin: "https://linkedin.com/in/seu-usuario",
  resumeUrl: "/seu-curriculo.pdf",
  avatarUrl: "/placeholder.svg?height=400&width=400",
}

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "Go", "C#", "SQL"],
  frameworks: ["Node.js", "Express", "NestJS", "Django", "Spring Boot", "ASP.NET Core", "FastAPI"],
  tools: ["Docker", "Kubernetes", "AWS", "Azure", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Kafka", "Git"],
}

export const projects = [
  {
    title: "API de Microserviços",
    description: "Sistema distribuído de microserviços com comunicação assíncrona e alta disponibilidade.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Node.js", "Kafka", "Docker", "Kubernetes", "MongoDB"],
    github: "https://github.com/seu-usuario/microservices-api",
    demo: null,
  },
  {
    title: "Sistema de Autenticação",
    description: "Serviço de autenticação e autorização com suporte a OAuth2, JWT e autenticação de dois fatores.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Java", "Spring Security", "PostgreSQL", "Redis"],
    github: "https://github.com/seu-usuario/auth-system",
    demo: "https://auth-demo.exemplo.com",
  },
  {
    title: "API de Processamento de Dados",
    description: "Sistema de processamento de grandes volumes de dados com filas e workers distribuídos.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "FastAPI", "Celery", "RabbitMQ", "PostgreSQL"],
    github: "https://github.com/seu-usuario/data-processing-api",
    demo: null,
  },
  {
    title: "Sistema de Pagamentos",
    description: "API de processamento de pagamentos com integração a múltiplos gateways e sistema anti-fraude.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
    github: "https://github.com/seu-usuario/payment-system",
    demo: null,
  },
  {
    title: "API GraphQL",
    description: "API GraphQL com resolvers eficientes, caching e otimização de consultas.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Node.js", "Apollo Server", "TypeScript", "PostgreSQL"],
    github: "https://github.com/seu-usuario/graphql-api",
    demo: "https://graphql-demo.exemplo.com",
  },
  {
    title: "Sistema de Logs e Monitoramento",
    description: "Solução completa para coleta, processamento e visualização de logs e métricas.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Go", "Elasticsearch", "Kibana", "Prometheus", "Grafana"],
    github: "https://github.com/seu-usuario/logging-system",
    demo: null,
  },
]
