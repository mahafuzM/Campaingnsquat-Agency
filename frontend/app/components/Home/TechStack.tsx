"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Monitor,
  Code,
  LayoutTemplate,
  Megaphone,
  Flame,
  Lightbulb,
  Cpu,
} from "lucide-react";

const tabData = [
  {
    id: "mobile",
    label: "Mobile App Development",
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Being a Top Mobile Application Development Company, we provide all Mobile App Development Services for all type of Mobile App Development needs using latest and trending technologies. We have an excellent in-house team of Mobile App Developers who is well experienced and skilled in Android App Development, ios App Development and Cross platform App Development.",
    items: [
      { name: "Apple", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
      { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "iPad", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
      { name: "Windows", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Hybrid", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Xamarin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg" },
      { name: "React-Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "PhoneGap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachecordova/apachecordova-original.svg" },
      { name: "Ionic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
      { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
  {
    id: "web",
    label: "Web Applications",
    icon: Monitor,
    title: "Web Development",
    description:
      "As one of the Top Web Development Company we provide high quality Web Development Services for all kind of Web Application Development requirements which cover different industries all over the World. We have a great pool of in-house Web Developers who is proficient in all latest and trending technologies.",
    items: [
      { name: "CakePHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg" },
      { name: "Codeigniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
      { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "OpenCart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencart/opencart-original.svg" },
      { name: "React-Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Shopify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
      { name: "Squarespace", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "WooCommerce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
      { name: "wordpress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
      { name: "YII", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg" },
      { name: "Magento", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
    ],
  },
  {
    id: "hire",
    label: "Hire Developers",
    icon: Code,
    title: "Hire Web & App Developers",
    description:
      "We have a great pool of Web and Mobile App Developers, who have excellent skills in all trending technologies of Web and Mobile App. We are known as Top PHP Development Company, Top Android App Development Company, Top IOS App Development Company. Which make us experts in all Web and App Development Services. Hire Web & App Developers with Next Big Technology for any Web or App needs.",
    items: [
      { name: "CakePHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg" },
      { name: "android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "Codeigniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
      { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "IOS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Magento", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
      { name: "php", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "React-Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Shopify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
      { name: "Wordpress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
      { name: "YII", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg" },
    ],
  },
  {
    id: "cms",
    label: "CMS & Framework",
    icon: LayoutTemplate,
    title: "CMS & Framework",
    description:
      "As a Top Website Development Company we work with all popular CMS & Frameworks. We are one of the Best WordPress Development Company, Best Laravel Development Company, Best Codeigniter Development Company and Best Magento Development Company, who have an expert team of each CMS and Framework. Our Team is well experienced in using any CMS and Framework with best of it.",
    items: [
      { name: "CakePHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg" },
      { name: "Codeigniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
      { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Magento", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
      { name: "OpenCart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencart/opencart-original.svg" },
      { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Shopify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
      { name: "Squarespace", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "WooCommerce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
      { name: "YII", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "AngularJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    ],
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Our team is well versed and skilled enough to work on all Open Source Platforms. As a Best Open Source Development Company we provide high quality Open Source Development Services for kind of Frontend and Backend Web Application Needs. That's why we are Top Angularjs Development Company, Top Nodejs Development Company, Top ReactJS Development Company and Top Vuejs Development Company.",
    items: [
      { name: "PPC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "SEO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
      { name: "e-mail Marketing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "Content Marketing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Facebook Marketing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
      { name: "Instagram Marketing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg" },
      { name: "LinkedIn Marketing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
    ],
  },
  {
    id: "trending",
    label: "Trending Solution",
    icon: Flame,
    title: "Trending Solution",
    description:
      "Our team is experienced and knowledgeable in all trending technologies, we cover all latest technologies. Our team is quick learn and we can easily adopt any new technology. We have worked with all latest platforms. We can cover all your requirements with any preffered platform. We are one of the Best Salesforce Development Company, Best Python Development Company and Best AI Development Company.",
    items: [
      { name: "AngularJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Artificial-intelligence", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Big-Data", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "Machine-Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "SalesForce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
      { name: "VueJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "wearable", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "xamarin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg" },
    ],
  },
  {
    id: "ondemand",
    label: "On Demand Solution",
    icon: Lightbulb,
    title: "On Demand Solution",
    description:
      "We provide all type of custom solutions as per client demands. It can be Augumented Reality based services, Backend Services, Digital Marketing, PPC, Search Engine Optimization, Social Networking etc. We have separate team for different fields, which helps us to cover all kind of on demand solutions.",
    items: [
      { name: "Augmented-Reality", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
      { name: "Back-end", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Digital-Marketing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "Front-end", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "IOT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
      { name: "Mobile-Apps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "POS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "PPC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "SEO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
      { name: "Social-Networking", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
      { name: "Softwares", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      { name: "Web-Apps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Grocery Delivery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Fashion e-commerce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
      { name: "Cricket Fantasy League", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Food Delivery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "OnlyFans Clone", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Multi-Vendor Marketplace", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
    ],
  },
  {
    id: "api",
    label: "Api Services",
    icon: Cpu,
    title: "Api Services",
    description:
      "We have experts who make high performing Back-end and API's for Mobile Applications and SOftware Applications. We are experts in developing custom Rest Api's and the same time our team is well experienced in working with any third party api's.",
    items: [
      { name: "Amazon", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Authorize.net", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Custom-API's", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "dhl", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Ebay", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "fedex", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
      { name: "Google", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "Paypal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/paypal/paypal-original.svg" },
      { name: "Rest-API's", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg" },
      { name: "WooCommerce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
      { name: "Yahoo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yahoo/yahoo-original.svg" },
    ],
  },
];

export default function TechStackTabs() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const currentTab = tabData.find((tab) => tab.id === activeTab) || tabData[0];

  return (
    <section className="w-full bg-[#02050a] py-8 sm:py-16 lg:py-24 text-white font-poppins relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-[#ff7a33]/10 to-[#3b82f6]/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-[1445px] w-full mx-auto px-3 sm:px-6 lg:px-8 relative z-10">

        {/* Outer Box */}
        <div className="w-full bg-[#080c14]/40 backdrop-blur-xl rounded-[12px] sm:rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* NAVIGATION PANEL (Mobile: Horizontal Scroll | Desktop: Vertical Sidebar) */}
            <div className="w-full lg:w-[380px] p-2 sm:p-4 shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible border-b lg:border-b-0 lg:border-r border-white/10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {tabData.map((tab) => {
                const IconComp = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`shrink-0 lg:w-full flex items-center gap-2.5 sm:gap-3.5 px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-[10px] sm:rounded-[12px] text-left transition-all duration-300 relative overflow-hidden group ${
                      isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {/* Active Indicator Bar (Desktop Left, Mobile Bottom) */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 bottom-0 lg:top-0 h-1 lg:h-full w-full lg:w-1 bg-[#F7A400] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#F7A400] text-black"
                          : "bg-white/5 text-white group-hover:bg-white/10"
                      }`}
                    >
                      <IconComp size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </div>

                    <span className="text-[13px] sm:text-[15px] font-semibold tracking-wide whitespace-nowrap lg:whitespace-normal truncate">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* CONTENT DISPLAY PANEL */}
            <div className="flex-1 w-full p-4 sm:p-8 lg:p-10 min-h-[450px] sm:min-h-[600px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  {/* Title & Description */}
                  <div className="max-w-[900px] mb-6 sm:mb-10">
                    <h2 className="text-[22px] sm:text-[36px] md:text-[42px] font-extrabold tracking-tight text-white mb-2 sm:mb-4">
                      {currentTab.title}
                    </h2>
                    <p className="text-[12px] sm:text-[14px] md:text-[15px] text-white/80 leading-relaxed">
                      {currentTab.description}
                    </p>
                  </div>

                  {/* Grid of Tech Icons */}
                  <div className="grid grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2.5 sm:gap-5">
                    {currentTab.items.map((item, index) => (
                      <motion.div
                        key={item.name + index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                        className="bg-white/[0.04] hover:bg-white/[0.08] rounded-[10px] p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 text-center group transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center p-2 sm:p-2.5 transition-transform duration-300 group-hover:scale-110">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-full h-full object-contain filter drop-shadow"
                          />
                        </div>
                        <span className="text-[11px] sm:text-[13px] font-medium text-white truncate w-full">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}