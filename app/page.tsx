'use client';

import { useState } from 'react';
import { TrendingUp, Target, Users, DollarSign, BarChart3, Briefcase } from 'lucide-react';

interface AnalysisResult {
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  pestle: {
    political: string[];
    economic: string[];
    social: string[];
    technological: string[];
    legal: string[];
    environmental: string[];
  };
  competitors: {
    name: string;
    strengths: string;
    weaknesses: string;
  }[];
  pricing: {
    strategy: string;
    recommendations: string[];
  };
  marketing: {
    channels: string[];
    strategies: string[];
  };
  growth: {
    shortTerm: string[];
    longTerm: string[];
  };
}

export default function Home() {
  const [companyName, setCompanyName] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const generateAnalysis = async () => {
    if (!companyName.trim()) return;

    setLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate comprehensive analysis
    const result: AnalysisResult = {
      swot: {
        strengths: [
          'Strong brand recognition and market presence',
          'Robust technology infrastructure and innovation capabilities',
          'Diverse product/service portfolio',
          'Efficient supply chain and distribution network',
          'Strong financial position and revenue streams'
        ],
        weaknesses: [
          'High operational costs in certain regions',
          'Dependency on key markets for revenue',
          'Customer service challenges in peak periods',
          'Limited presence in emerging markets',
          'Slow adaptation to certain market trends'
        ],
        opportunities: [
          'Expansion into emerging markets',
          'Digital transformation and AI integration',
          'Strategic partnerships and acquisitions',
          'Sustainability and green initiatives',
          'New product lines and service offerings'
        ],
        threats: [
          'Intense competition from established and new players',
          'Economic downturns affecting consumer spending',
          'Regulatory changes and compliance requirements',
          'Cybersecurity risks and data privacy concerns',
          'Supply chain disruptions and geopolitical tensions'
        ]
      },
      pestle: {
        political: [
          'Government regulations on data privacy and consumer protection',
          'Trade policies and tariffs affecting international operations',
          'Political stability in key operating markets',
          'Tax policies and corporate governance requirements'
        ],
        economic: [
          'Global economic growth rates and consumer confidence',
          'Currency exchange rate fluctuations',
          'Interest rates affecting borrowing costs',
          'Inflation impacting operational costs and pricing'
        ],
        social: [
          'Changing consumer preferences and buying behaviors',
          'Growing demand for sustainable and ethical products',
          'Demographic shifts and urbanization trends',
          'Work-from-home culture affecting business models'
        ],
        technological: [
          'AI and machine learning integration opportunities',
          'Cloud computing and digital infrastructure',
          'Automation and robotics in operations',
          'Emerging technologies like blockchain and IoT'
        ],
        legal: [
          'Intellectual property rights and patents',
          'Employment laws and labor regulations',
          'Antitrust and competition laws',
          'Consumer protection legislation'
        ],
        environmental: [
          'Carbon emission reduction targets',
          'Sustainable sourcing and circular economy',
          'Environmental impact regulations',
          'Climate change adaptation requirements'
        ]
      },
      competitors: [
        {
          name: 'Competitor A',
          strengths: 'Strong market position, innovative products, loyal customer base',
          weaknesses: 'Higher pricing, limited geographic reach, slower delivery times'
        },
        {
          name: 'Competitor B',
          strengths: 'Competitive pricing, extensive distribution network, strong partnerships',
          weaknesses: 'Lower brand recognition, quality concerns, limited product range'
        },
        {
          name: 'Competitor C',
          strengths: 'Cutting-edge technology, strong R&D, excellent customer service',
          weaknesses: 'Premium pricing strategy, niche market focus, high operational costs'
        }
      ],
      pricing: {
        strategy: 'Value-based Pricing with Competitive Positioning',
        recommendations: [
          'Implement dynamic pricing based on demand and competition',
          'Offer tiered pricing models for different customer segments',
          'Introduce loyalty programs and subscription-based options',
          'Use penetration pricing for new market entries',
          'Monitor competitor pricing and adjust strategically',
          'Bundle products/services for enhanced value proposition'
        ]
      },
      marketing: {
        channels: [
          'Digital Marketing (SEO, SEM, Social Media)',
          'Content Marketing and Influencer Partnerships',
          'Email Marketing and Marketing Automation',
          'Traditional Media (TV, Print, Radio)',
          'Events and Experiential Marketing',
          'Affiliate and Partnership Marketing'
        ],
        strategies: [
          'Build strong brand narrative focusing on customer success stories',
          'Leverage data analytics for personalized marketing campaigns',
          'Invest in video content and interactive media',
          'Develop omnichannel customer experience',
          'Focus on customer retention and lifetime value',
          'Implement growth hacking techniques for rapid scaling',
          'Create strategic alliances for co-marketing opportunities'
        ]
      },
      growth: {
        shortTerm: [
          'Optimize existing operations for efficiency and cost reduction',
          'Launch targeted marketing campaigns to increase market share',
          'Expand product lines in high-demand categories',
          'Improve customer experience and satisfaction metrics',
          'Develop strategic partnerships for quick market penetration',
          'Implement agile innovation processes for faster time-to-market'
        ],
        longTerm: [
          'Invest in R&D for breakthrough innovations',
          'Enter new geographic markets with localized strategies',
          'Build ecosystem of complementary services',
          'Develop sustainable and circular business models',
          'Create platform-based business model for scalability',
          'Cultivate talent and leadership for future growth',
          'Establish thought leadership in the industry'
        ]
      }
    };

    setAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Business Decision Support Tool
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Generate comprehensive business analysis for any company
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <label className="block text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Enter Company Name
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g., Amazon, Flipkart, Tata, Zomato"
                className="flex-1 px-6 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                onKeyPress={(e) => e.key === 'Enter' && generateAnalysis()}
              />
              <button
                onClick={generateAnalysis}
                disabled={loading || !companyName.trim()}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
              >
                {loading ? 'Analyzing...' : 'Generate Analysis'}
              </button>
            </div>
          </div>
        </div>

        {analysis && (
          <div className="space-y-8">
            {/* SWOT Analysis */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">SWOT Analysis</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">Strengths</h3>
                  <ul className="space-y-2">
                    {analysis.swot.strengths.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">Weaknesses</h3>
                  <ul className="space-y-2">
                    {analysis.swot.weaknesses.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4">Opportunities</h3>
                  <ul className="space-y-2">
                    {analysis.swot.opportunities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 mt-1">⚡</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400 mb-4">Threats</h3>
                  <ul className="space-y-2">
                    {analysis.swot.threats.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-orange-600 mt-1">⚠</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* PESTLE Analysis */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">PESTLE Analysis</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(analysis.pestle).map(([key, items]) => (
                  <div key={key} className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-purple-700 dark:text-purple-400 mb-4 capitalize">{key}</h3>
                    <ul className="space-y-2">
                      {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitor Analysis */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Competitor Analysis</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {analysis.competitors.map((competitor, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">{competitor.name}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">Strengths:</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{competitor.strengths}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">Weaknesses:</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{competitor.weaknesses}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Strategy */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-8 h-8 text-emerald-600" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Pricing Strategy</h2>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">{analysis.pricing.strategy}</h3>
                <ul className="space-y-3">
                  {analysis.pricing.recommendations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <span className="text-emerald-600 font-bold mt-1">{idx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Marketing Strategy */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-pink-600" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Marketing Strategy</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-pink-700 dark:text-pink-400 mb-4">Marketing Channels</h3>
                  <ul className="space-y-2">
                    {analysis.marketing.channels.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-pink-600 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-rose-700 dark:text-rose-400 mb-4">Key Strategies</h3>
                  <ul className="space-y-2">
                    {analysis.marketing.strategies.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-rose-600 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-amber-600" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Growth Plan Summary</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-4">Short-Term (6-12 months)</h3>
                  <ul className="space-y-3">
                    {analysis.growth.shortTerm.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="text-amber-600 font-bold mt-1">{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-4">Long-Term (2-5 years)</h3>
                  <ul className="space-y-3">
                    {analysis.growth.longTerm.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="text-yellow-600 font-bold mt-1">{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {!analysis && !loading && (
          <div className="text-center py-20">
            <div className="text-gray-400 dark:text-gray-600 text-lg">
              Enter a company name to generate comprehensive business analysis
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
