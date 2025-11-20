import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImage } from '@/utils/removeBackground';
import { toast } from 'sonner';

const LogoProcessor = () => {
  const [processing, setProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const processLogo = async () => {
    setProcessing(true);
    try {
      toast.info('Loading logo...');
      
      // Fetch the logo
      const response = await fetch('/Logo.png');
      const blob = await response.blob();
      
      toast.info('Removing background... This may take a moment.');
      
      // Load and process the image
      const imageElement = await loadImage(blob);
      const transparentBlob = await removeBackground(imageElement);
      
      // Create URL for preview
      const url = URL.createObjectURL(transparentBlob);
      setProcessedImage(url);
      
      toast.success('Background removed successfully!');
    } catch (error) {
      console.error('Error processing logo:', error);
      toast.error('Failed to process logo. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const downloadLogo = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'logo-transparent.png';
    link.click();
    
    toast.success('Logo downloaded!');
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Logo Background Remover</h1>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Original Logo</h2>
            <img src="/Logo.png" alt="Original Logo" className="max-w-md mx-auto bg-muted p-4 rounded" />
          </div>
          
          {!processedImage && (
            <Button 
              onClick={processLogo}
              disabled={processing}
              size="lg"
              className="w-full"
            >
              {processing ? 'Processing...' : 'Remove Background'}
            </Button>
          )}
          
          {processedImage && (
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Transparent Logo</h2>
              <div className="bg-gradient-to-br from-muted to-muted-foreground/10 p-4 rounded mb-4">
                <img src={processedImage} alt="Transparent Logo" className="max-w-md mx-auto" />
              </div>
              <Button onClick={downloadLogo} size="lg" className="w-full">
                Download Transparent Logo
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoProcessor;
