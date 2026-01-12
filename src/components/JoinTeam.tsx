import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Code, Palette, TrendingUp, ChevronRight, Sparkles, Users, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const benefits = [
  {
    icon: Rocket,
    title: 'Proyectos Innovadores',
    description: 'Trabaja con tecnologías de vanguardia como IA, automatización y cloud computing.',
  },
  {
    icon: Users,
    title: 'Equipo Global',
    description: 'Colabora con profesionales en Canadá, Colombia y otros países de Latinoamérica.',
  },
  {
    icon: TrendingUp,
    title: 'Crecimiento Profesional',
    description: 'Capacitación continua, mentorías y oportunidades de desarrollo.',
  },
  {
    icon: Sparkles,
    title: 'Cultura de Innovación',
    description: 'Un ambiente donde tus ideas son valoradas y pueden convertirse en realidad.',
  },
];

const openPositions = [
  {
    icon: Code,
    title: 'Desarrollador Full Stack',
    type: 'Remoto / Tiempo completo',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    icon: Palette,
    title: 'Diseñador UI/UX',
    type: 'Remoto / Tiempo completo',
    skills: ['Figma', 'Design Systems', 'Prototipado', 'User Research'],
  },
  {
    icon: Briefcase,
    title: 'Project Manager',
    type: 'Remoto / Tiempo completo',
    skills: ['Agile', 'Scrum', 'Liderazgo', 'Comunicación'],
  },
];

export const JoinTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');
  const { toast } = useToast();

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: '¡Aplicación enviada!',
      description: 'Revisaremos tu perfil y te contactaremos pronto.',
    });
    setIsModalOpen(false);
  };

  return (
    <section id="trabaja-con-nosotros" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Únete al Equipo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Quieres ser parte de <span className="text-primary">RCW Innovation</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Buscamos profesionales apasionados por la tecnología y la innovación. 
            Con más de 10 años de experiencia, nuestro equipo está compuesto por ingenieros, 
            diseñadores y estrategas que transforman ideas en soluciones de impacto.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10">Posiciones Abiertas</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <position.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {position.type}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-3">{position.title}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {position.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  onClick={() => handleApply(position.title)}
                >
                  Aplicar ahora
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>

          {/* General Application CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">
              ¿No encuentras tu posición ideal? Envíanos tu CV y te contactaremos cuando haya una oportunidad para ti.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary hover:text-primary-foreground"
              onClick={() => handleApply('Aplicación General')}
            >
              Enviar aplicación espontánea
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Aplicar a: {selectedPosition}</DialogTitle>
            <DialogDescription>
              Completa el formulario y nos pondremos en contacto contigo.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" placeholder="Tu nombre" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="tu@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn / Portafolio</Label>
              <Input id="linkedin" placeholder="https://linkedin.com/in/tu-perfil" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">¿Por qué quieres unirte a RCW Innovation?</Label>
              <Textarea
                id="message"
                placeholder="Cuéntanos sobre ti y tu motivación..."
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              Enviar aplicación
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};
