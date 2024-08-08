// ArticleContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Article {
    title: string;
    content: string;
    image: string; // base64 image string
}

interface ArticleContextType {
    articles: Article[];
    setArticles: (articles: Article[]) => void;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [articles, setArticles] = useState<Article[]>([]);

    return (
        <ArticleContext.Provider value={{ articles, setArticles }}>
            {children}
        </ArticleContext.Provider>
    );
};

export const useArticleContext = (): ArticleContextType => {
    const context = useContext(ArticleContext);
    if (!context) {
        throw new Error('useArticleContext must be used within an ArticleProvider');
    }
    return context;
};
