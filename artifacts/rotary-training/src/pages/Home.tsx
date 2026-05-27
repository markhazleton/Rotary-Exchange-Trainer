import { cloneElement, ReactElement } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Globe, Heart, Building, GraduationCap, Leaf, Droplets, Baby } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/service-hero.jpg" 
            alt="Rotarians engaged in a community project" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Rotary Leadership Training
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            District 5680
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Rotary is not just a meeting you attend. It's a network of people trying to make things better. And the most important part of that network is you.
          </motion.p>
        </div>
      </section>

      {/* 2. Why You're Here */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Why did you join Rotary?</h2>
            <p className="text-lg text-muted-foreground italic">(Not the textbook answer. Your answer.)</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Heart size={32} className="text-accent" />}
              title="Service"
              desc="Giving back, doing something meaningful locally or internationally — health, education, basic needs."
            />
            <FeatureCard 
              icon={<Users size={32} className="text-accent" />}
              title="Connection"
              desc="Meeting people you wouldn't normally cross paths with; equal footing for everyone."
            />
            <FeatureCard 
              icon={<GraduationCap size={32} className="text-accent" />}
              title="Growth"
              desc="Build confidence, become a better speaker, develop leadership skills with people who support you."
            />
            <FeatureCard 
              icon={<Building size={32} className="text-accent" />}
              title="Community"
              desc="Understand what's actually needed and be part of the solution."
            />
            <FeatureCard 
              icon={<Globe size={32} className="text-accent" />}
              title="Global Impact"
              desc="Be part of something making a difference in other parts of the world."
            />
          </div>

          <motion.div {...fadeIn} className="mt-20 text-center bg-primary text-white p-12 rounded-2xl shadow-xl">
            <p className="text-2xl md:text-3xl font-serif italic">
              "Those reasons aren't just why you joined Rotary. They are exactly why Rotary exists."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. What Rotary Stands For */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">What Rotary Stands For</h2>
              <div className="w-16 h-1 bg-accent mb-8"></div>
              <p className="text-xl text-foreground mb-8 leading-relaxed font-light">
                People coming together, taking action, and creating lasting change — in the world, in their communities, and in themselves.
              </p>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-4">Strategic Priorities</h3>
                <ul className="space-y-4">
                  <ListItem>Making a bigger impact</ListItem>
                  <ListItem>Reaching more people</ListItem>
                  <ListItem>Keeping members engaged</ListItem>
                  <ListItem highlighted>Staying flexible as the world changes.</ListItem>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 italic">That last one matters more than ever right now.</p>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="relative">
              <div className="aspect-square bg-primary rounded-full absolute -top-4 -right-4 w-32 h-32 opacity-20 blur-2xl"></div>
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg relative z-10 border-l-4 border-accent">
                <BookOpen size={48} className="text-primary mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-4">The Object of Rotary</h3>
                <p className="text-muted-foreground mb-6">To encourage and foster the ideal of service as a basis of worthy enterprise.</p>
                <Link href="/resources" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                  View Full Document <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. What Rotary Does */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16">Seven Areas of Focus</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <FocusArea icon={<Heart />} title="Promoting Peace" delay={0.1} />
            <FocusArea icon={<Heart />} title="Fighting Disease" delay={0.2} />
            <FocusArea icon={<Droplets />} title="Clean Water" delay={0.3} />
            <FocusArea icon={<Baby />} title="Mothers & Children" delay={0.4} />
            <FocusArea icon={<GraduationCap />} title="Education" delay={0.5} />
            <FocusArea icon={<Building />} title="Local Economies" delay={0.6} />
            <FocusArea icon={<Leaf />} title="Environment" delay={0.7} />
          </div>

          <motion.p {...fadeIn} className="mt-16 text-xl md:text-2xl font-serif italic text-primary-foreground/90 max-w-3xl mx-auto">
            "It's all about improving quality of life. And you'll probably see your 'why' somewhere in that list."
          </motion.p>
        </div>
      </section>

      {/* 5. Rotary Structure */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-16">Rotary Structure</motion.h2>
          
          <div className="space-y-4">
            <StructureRow level="Your Club" desc="Where everything happens — projects start, relationships build, impact is made" size="lg" />
            <StructureRow level="The District" desc="Supports your club through leadership, training, and resources" size="md" />
            <StructureRow level="Zones" desc="Support districts" size="sm" />
            <StructureRow level="Rotary International" desc="Provides overall direction" size="sm" />
            <StructureRow level="The Rotary Foundation" desc="Helps fund projects all over the world" size="sm" />
          </div>

          <motion.div {...fadeIn} className="mt-16 bg-muted p-8 rounded-xl border border-border">
            <p className="text-lg text-foreground font-medium">
              "Every single level exists to support you. Not the other way around. You are not 'just a member.' If you want to grow, get involved, lead, or take on bigger projects — there's a path for you in Rotary."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. Common Questions */}
      <section className="py-24 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-center mb-12">Common Questions</motion.h2>
          <motion.div {...fadeIn} className="bg-card rounded-2xl shadow-sm border p-6 md:p-10">
            <ul className="space-y-6">
              <FaqItem text="Clubs are mostly independent but share common goals and responsibilities" />
              <FaqItem text="Your dues don't just stay in your club — they also support district and global efforts" />
              <FaqItem text="You belong to your club but you're connected to something much larger" />
              <FaqItem text="More resources are available than most members ever realize" />
              <FaqItem text="Rotary isn't there to control what you do — it's there to support what you want to do" />
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 7. Take Action & Closing */}
      <section className="py-32 bg-primary relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Take Action</motion.h2>
          <motion.p {...fadeIn} className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed mb-12">
            "What's one step you can take to get more involved? Not five steps. Just one. Because that's how it starts. Thank you."
          </motion.p>
          <motion.div {...fadeIn}>
            <Link 
              href="/resources" 
              className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
            >
              Explore Resources
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 8. Speaker Notes */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="speaker-notes" className="border rounded-lg px-6 bg-muted/50">
              <AccordionTrigger className="text-lg font-serif font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <BookOpen size={20} className="text-primary" />
                  Facilitator Script & Notes
                </span>
              </AccordionTrigger>
              <AccordionContent className="prose prose-blue max-w-none pt-4 pb-6">
                <p>Hello, everyone! My name is _________, and I'm a member of the Rotary Club of __________ in District 5680.</p>
                <p>Rotary is not just a meeting you attend. It's not just a club you belong to. It's a network — a global network of people who are trying to make things better, locally and around the world. And the most important part of that network is you.</p>
                
                <h4>WHY DID YOU JOIN ROTARY? (Not the textbook answer. Your answer.)</h4>
                <ul>
                  <li>Service: giving back, doing something meaningful locally or internationally — health, education, basic needs</li>
                  <li>Connection: meeting people you wouldn't normally cross paths with; equal footing for everyone</li>
                  <li>Growth: build confidence, become a better speaker, develop leadership skills with people who support you</li>
                  <li>Community: understand what's actually needed and be part of the solution</li>
                  <li>Global impact: be part of something making a difference in other parts of the world</li>
                </ul>
                <p><em>"Those reasons aren't just why you joined Rotary. They are exactly why Rotary exists."</em></p>

                <h4>WHAT ROTARY STANDS FOR:</h4>
                <p>People coming together, taking action, and creating lasting change — in the world, in their communities, and in themselves. Strategic priorities: Making a bigger impact / Reaching more people / Keeping members engaged / Staying flexible as the world changes. That last one matters more than ever right now.</p>
                
                {/* Continuing script is implied in layout above */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

// Subcomponents

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      variants={{
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 }
      }}
      viewport={{ once: true }}
      className="bg-card border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ListItem({ children, highlighted = false }: { children: React.ReactNode, highlighted?: boolean }) {
  return (
    <li className="flex items-start">
      <div className={`mt-1 mr-3 rounded-full flex-shrink-0 w-5 h-5 flex items-center justify-center ${highlighted ? 'bg-accent text-accent-foreground' : 'bg-primary/10 text-primary'}`}>
        <div className="w-2 h-2 rounded-full bg-current"></div>
      </div>
      <span className={highlighted ? "font-bold text-foreground" : "text-muted-foreground"}>{children}</span>
    </li>
  );
}

function FocusArea({ icon, title, delay }: { icon: React.ReactNode, title: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center p-4"
    >
      <div className="w-20 h-20 rounded-full border-2 border-accent/50 flex items-center justify-center mb-4 text-accent">
        {cloneElement(icon as ReactElement, { size: 32 })}
      </div>
      <span className="font-semibold text-lg">{title}</span>
    </motion.div>
  );
}

function StructureRow({ level, desc, size }: { level: string, desc: string, size: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    lg: "text-2xl md:text-3xl font-bold py-6",
    md: "text-xl md:text-2xl font-semibold py-5",
    sm: "text-lg md:text-xl font-medium py-4 text-muted-foreground"
  };

  return (
    <div className={`border-b border-border last:border-0 flex flex-col md:flex-row md:items-center justify-between gap-2 ${sizeClasses[size]}`}>
      <span className={size === 'lg' ? 'text-primary' : ''}>{level}</span>
      <span className="text-sm md:text-base font-normal text-muted-foreground max-w-md text-left md:text-right">{desc}</span>
    </div>
  );
}

function FaqItem({ text }: { text: string }) {
  return (
    <li className="flex gap-4">
      <ArrowRight className="text-accent flex-shrink-0 mt-1" size={20} />
      <span className="text-foreground text-lg">{text}</span>
    </li>
  );
}
