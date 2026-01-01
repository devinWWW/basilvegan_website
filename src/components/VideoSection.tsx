
interface VideoItem {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  type: 'gov-feature' | 'chef-demo' | 'live-review';
}

const VideoSection: React.FC = () => {
  const videos: VideoItem[] = [
    {
      id: 'gov-feature',
      title: 'Government Feature',
      description: 'See Basil Vegan Thai featured in local government coverage',
      youtubeId: 'jaadXBp2wE8',
      type: 'gov-feature'
    },
    {
      id: 'chef-demo',
      title: 'Chef Demonstration',
      description: 'Watch Chef Mindy demonstrate her culinary techniques',
      youtubeId: 'GBVCUTv-09Q',
      type: 'chef-demo'
    },
    {
      id: 'live-review',
      title: 'Live Review',
      description: 'See what customers are saying about their experience',
      youtubeId: 'DKIvhqQJojs',
      type: 'live-review'
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-neutral-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-4 text-center">
          See Us In Action
        </h2>
        <p className="text-lg text-dark-text font-body text-center mb-12 max-w-2xl mx-auto">
          Watch videos featuring Chef Mindy, our signature dishes, and customer experiences
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary-teal mb-2">
                  {video.title}
                </h3>
                <p className="text-dark-text font-body text-sm">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

