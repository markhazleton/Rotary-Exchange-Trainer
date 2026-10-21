import { motion } from "framer-motion";
import {
  ExternalLink,
  FileText,
  Globe,
  Shield,
  BookOpen,
  ScrollText,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Resources() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const resources = [
    {
      title: "RI Action Plan",
      desc: "Learn about Rotary's strategic plan to increase our impact, expand our reach, enhance participant engagement, and increase our ability to adapt.",
      url: "https://my.rotary.org/en/learning-reference/about-rotary/action-plan",
      icon: <Globe className="text-primary w-8 h-8 mb-4" />,
    },
    {
      title: "Action Plan Flyer",
      desc: "A quick-reference guide to the Rotary Action Plan. Perfect for sharing with your club or keeping on hand.",
      url: "https://my.rotary.org/document/action-plan-flyer",
      icon: <FileText className="text-primary w-8 h-8 mb-4" />,
    },
    {
      title: "The Object of Rotary",
      desc: "The guiding principles of Rotary, emphasizing the ideal of service as a basis of worthy enterprise.",
      url: "https://www.rotary.org/myrotary/en/document/576",
      icon: <Shield className="text-primary w-8 h-8 mb-4" />,
    },
    {
      title: "Rotary Basics",
      desc: "A comprehensive overview of Rotary International, its history, structure, and programs.",
      url: "https://my.rotary.org/en/document/rotary-basics",
      icon: <BookOpen className="text-primary w-8 h-8 mb-4" />,
    },
    {
      title: "Governance Documents",
      desc: "Access the constitutional documents that govern Rotary International and its member clubs.",
      url: "https://my.rotary.org/en/learning-reference/about-rotary/governance-documents",
      icon: <ScrollText className="text-primary w-8 h-8 mb-4" />,
    },
    {
      title: "Global History Fellowship",
      desc: "Explore the rich history of Rotary through the Rotary Global History Fellowship.",
      url: "https://rghf.org/",
      icon: <Globe className="text-primary w-8 h-8 mb-4" />,
    },
  ];

  return (
    <div className="bg-muted min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
          >
            Training Resources
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            className="h-1 bg-accent mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Essential documents and guides to help you lead and serve
            effectively in District 5680.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resources.map((resource, i) => (
            <motion.div key={i} variants={item}>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
                data-testid={`resource-card-${i}`}
              >
                <Card className="h-full border-border bg-card hover:border-accent hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                  <CardHeader>
                    {resource.icon}
                    <CardTitle className="font-serif text-xl flex items-center justify-between">
                      {resource.title}
                      <ExternalLink
                        size={18}
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity text-accent"
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {resource.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 bg-primary text-white p-10 rounded-2xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 relative z-10">
            Need something else?
          </h2>
          <p className="text-primary-foreground/80 mb-8 relative z-10 max-w-xl mx-auto">
            Log in to My Rotary to access the complete Learning Center and
            customized tools for your club role.
          </p>
          <a
            href="https://my.rotary.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors relative z-10"
          >
            Go to My Rotary
          </a>
        </motion.div>
      </div>
    </div>
  );
}
