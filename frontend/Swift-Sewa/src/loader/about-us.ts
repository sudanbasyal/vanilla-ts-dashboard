export class AboutusPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/about_us.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    
  };
}
