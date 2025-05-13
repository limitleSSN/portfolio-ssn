
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const YouTubeSection = () => {
  const channelStats = {
    subscribers: "200+",
    views: "92,000+",
    watchHours: "1,143+",
    likes: "5,000+",
    channelUrl: "https://youtube.com/@kunal_vish_08?si=5EMHBB93Or-wDz2a",
    channelName: "Kunal Vishwakarma"
  };

  return (
    <section id="youtube" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-kunalpink/10 to-kunalblue/10 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-heading mb-4">YouTube Channel</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Sharing knowledge and insights through video content
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
          {/* Channel Card */}
          <Card className="col-span-1 lg:col-span-2 bg-black/40 border-kunalpink/20 card-hover">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-kunalpink/20 rounded-full flex items-center justify-center">
                  <Youtube size={40} className="text-kunalpink" />
                </div>
              </div>
              <CardTitle className="gradient-heading text-2xl">
                {channelStats.channelName}
              </CardTitle>
              <CardDescription className="text-gray-400">
                Educational Content Creator
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p className="text-gray-300 mb-6 text-center">
                Creating educational content focused on technology, programming, and personal development.
              </p>
              <Button
                className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white flex items-center gap-2 animate-pulse-slow"
                asChild
              >
                <a href={channelStats.channelUrl} target="_blank" rel="noopener noreferrer">
                  <Youtube size={18} />
                  <span>Subscribe Now</span>
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Subscribers */}
            <Card className="bg-black/40 border-kunalpink/20 card-hover group">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="mb-2 text-kunalpink group-hover:text-kunalblue transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold gradient-heading">{channelStats.subscribers}</h3>
                <p className="text-gray-400 text-sm mt-1">Subscribers</p>
              </CardContent>
            </Card>

            {/* Views */}
            <Card className="bg-black/40 border-kunalpink/20 card-hover group">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="mb-2 text-kunalpink group-hover:text-kunalblue transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold gradient-heading">{channelStats.views}</h3>
                <p className="text-gray-400 text-sm mt-1">Views</p>
              </CardContent>
            </Card>

            {/* Watch Time */}
            <Card className="bg-black/40 border-kunalpink/20 card-hover group">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="mb-2 text-kunalpink group-hover:text-kunalblue transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold gradient-heading">{channelStats.watchHours}</h3>
                <p className="text-gray-400 text-sm mt-1">Watch Hours</p>
              </CardContent>
            </Card>

            {/* Likes */}
            <Card className="bg-black/40 border-kunalpink/20 card-hover group">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="mb-2 text-kunalpink group-hover:text-kunalblue transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 10v12"></path>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold gradient-heading">{channelStats.likes}</h3>
                <p className="text-gray-400 text-sm mt-1">Likes</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <iframe 
            width="560" 
            height="315" 
            className="rounded-lg shadow-lg max-w-full border-2 border-kunalpink/30 hover:border-kunalblue/50 transition-all duration-500"
            src="https://www.youtube.com/embed/nqeWEQ4jcKg" 
            title="YouTube short video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            className="border-kunalpink hover:border-kunalblue hover:bg-black/20 text-white"
            asChild
          >
            <a
              href={channelStats.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Youtube size={18} className="text-[#FF0000]" />
              Visit YouTube Channel
            </a>
          </Button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-gradient-to-r from-kunalpink/20 to-kunalblue/10 blur-3xl"></div>
      <div className="absolute top-20 -left-10 w-40 h-40 rounded-full bg-kunalblue/10 blur-3xl"></div>
    </section>
  );
};

export default YouTubeSection;
