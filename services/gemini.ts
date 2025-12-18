
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const generateSiteImage = async (prompt: string): Promise<string | null> => {
  if (!API_KEY) return null;
  
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: `A high-quality, professional, industrial-grade cinematic concept art for a ${prompt}. Cinematic lighting, 8k resolution, modern tech aesthetic.` }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error) {
    console.error("Image generation failed:", error);
  }
  return null;
};
