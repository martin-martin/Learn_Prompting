"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3460],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>h});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(i),d=r,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||n;return i?a.createElement(h,o(o({ref:t},m),{},{components:i})):a.createElement(h,o({ref:t},m))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<n;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},10794:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>w,frontMatter:()=>u,metadata:()=>d,toc:()=>f});var a=i(87462),r=(i(67294),i(3905));i.p;const n=i.p+"assets/images/Diagram-1a68ec51d629e3e4f6e1381a3b0439a9.png",o=i.p+"assets/images/Step1-fff2a533ca71621727631ccb84dfe6ee.png",s=i.p+"assets/images/Step2-da1e34be3b9fb4d6a950b6fc8fadf650.png",l=i.p+"assets/images/Step3-26b8cf5219cb97b39a1de1db5b08aa66.png",p=i.p+"assets/images/Step4-48e3f74fccb11e6e7747981824927187.png",m=i.p+"assets/images/Zap-430865145564b7364ed877abdc96f6fd.png",u={sidebar_position:600},c="\ud83d\udfe2 Zapier for Emails",d={unversionedId:"basic_applications/zapier_for_emails",id:"basic_applications/zapier_for_emails",title:"\ud83d\udfe2 Zapier for Emails",description:"Introduction",source:"@site/docs/basic_applications/zapier_for_emails.md",sourceDirName:"basic_applications",slug:"/basic_applications/zapier_for_emails",permalink:"/ar/docs/basic_applications/zapier_for_emails",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basic_applications/zapier_for_emails.md",tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Summarizing Text",permalink:"/ar/docs/basic_applications/summarize"},next:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/ar/docs/category/\ufe0f-intermediate"}},h={},f=[{value:"Introduction",id:"introduction",level:2},{value:"General Idea",id:"general-idea",level:2},{value:"Set-up in Zapier",id:"set-up-in-zapier",level:2},{value:"Optimizing the prompt for better results",id:"optimizing-the-prompt-for-better-results",level:2},{value:"Other usecases",id:"other-usecases",level:2},{value:"Concerns",id:"concerns",level:2}],g={toc:f},y="wrapper";function w(e){let{components:t,...i}=e;return(0,r.kt)(y,(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-zapier-for-emails"},"\ud83d\udfe2 Zapier for Emails"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"We have already seen how useful GPT-3 can be when it comes to emails. It can be even more so when you combine it with ",(0,r.kt)("strong",{parentName:"p"},"nocode")," tools like ",(0,r.kt)("a",{parentName:"p",href:"https://zapier.com"},"Zapier")," or ",(0,r.kt)("a",{parentName:"p",href:"https://bubble.io"},"Bubble.io"),"."),(0,r.kt)("p",null,"This article will contain an example of what Zapier+GPT-3 can do with only a small amount of setup time. This article focuses on a particular example, but the possibilities are much greater. We'll give some other examples along the way. Keep in mind you can also do this in Bubble.io. There are many other nocode tools, but at the time of writing only very few allow you to use GPT-3. "),(0,r.kt)("p",null,"In this article we will show you how to set up a simple system in Zapier in which ",(0,r.kt)("strong",{parentName:"p"},"e-mails are summarized and stored"),". Have a meeting with someone? Quickly check the summaries of emails you've exchanged with that person. Setting this up takes about 20 minutes."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It is helpful to already know Zapier for this article. If you don't, you can check out this ",(0,r.kt)("a",{parentName:"p",href:"https://zapier.com/learn/"},"article"),".")),(0,r.kt)("h2",{id:"general-idea"},"General Idea"),(0,r.kt)("p",null,"Below is a diagram of what we will be doing here in Zapier. Whenever an email comes into your inbox, it will trigger Zapier. There are four steps (for now):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Email comes in and trigger Zapier"),(0,r.kt)("li",{parentName:"ol"},"Format the content of the email (to remove HTML markdown, for example). "),(0,r.kt)("li",{parentName:"ol"},"Send it to GPT-3 to be summarized"),(0,r.kt)("li",{parentName:"ol"},"Store the output in a database")),(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)("img",{src:n,style:{width:"500px"}})),(0,r.kt)("h2",{id:"set-up-in-zapier"},"Set-up in Zapier"),(0,r.kt)("p",null,"Make sure to have a ",(0,r.kt)("a",{parentName:"p",href:"https://zapier.com/sign-up"},"Zapier account")," (you can get a free one). Setting it up should be fairly straightforward. After making your account, expand the below box to see full descriptions of each Zapier action we need to create. "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand for a more detailed view of the steps in Zapier"),(0,r.kt)("div",null,"This is what the Zapier action diagram will eventually look like.",(0,r.kt)("div",null,(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)("img",{src:m,style:{width:"500px"}}))),(0,r.kt)("br",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Step 1: Gmail trigger on new incoming email (Gmail is used here)."),(0,r.kt)("div",null,(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)("img",{src:o,style:{width:"500px"}})))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Step 2: Formatter for E-mail content."),(0,r.kt)("div",null,(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)("img",{src:s,style:{width:"500px"}})))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Step 3: Prompting the Email content",(0,r.kt)("br",null)),(0,r.kt)("div",null,(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)("img",{src:l,style:{width:"500px"}})))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Step 4: Adding it to a database"),(0,r.kt)("div",null,(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)("img",{src:p,style:{width:"500px"}})))))),"Here is a set-up in zapier that allows you to do a very basic summary as shown in the diagram. It has it\u2019s limitation, but it does do the job and can build up a useful database.",(0,r.kt)("h2",{id:"optimizing-the-prompt-for-better-results"},"Optimizing the prompt for better results"),(0,r.kt)("p",null,"There are a few easy ways to improve your results. Adding context and role prompting can improve the output. However, the topic and contents of your emails might cover a wide range of topics. This means that general instructions will do a better job than very specific ones, which might throw the model off. "),(0,r.kt)("p",null,'For practical reasons, it is useful to give an instruction, followed by telling GPT-3 when the email starts in the prompt by simply adding "Email: " and ending the prompt with ""Summary": ". This avoids GPT-3 answering with "Sure! I can summarize it for you...".'),(0,r.kt)("p",null,"Role prompting can be useful here as well. Asking GPT-3 to act as a personal assistant helps increase the quality of the summary.\nIf you want to summarize work emails, simply adding the role you have gives GPT-3 context to work with. It acts as if it assumes some level of knowledge from the reader, which helps filter out the non-relevant parts of the email.\nBelow we show some examples with emails an office administrator might receive. "),(0,r.kt)("p",null,"You can ask it to summarize a simple email in bullet points, however, this might not be all that useful depending on how you would like to use the summary. For quick skimming of email exchanges you might just want it to be short and concise. Simply asking for this in the prompt works well. Below is an example of this prompt. Adjust it and play around with it to see how it changes. "),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Act as my personal assistant. I am an office administrator. Summarize the following email as concisely as you can, ignore the footer and header and any previous emails. \\n\\nEmail: Request for Additional Office Supplies Dear Office Administrator, I hope this email finds you well. I am writing to request additional office supplies for our team. As you know, we have been experiencing a high volume of work lately and have been using our supplies at a faster rate than usual. We would greatly appreciate it if you could provide us with the following items: Printer paper Ink cartridges for the HP printer in the conference room Sticky notes Binder clips Highlighters Please let me know if there are any questions or concerns, and when we can expect the supplies to be delivered. Thank you for your help. \\n\\nBest regards, Your Name Summary:\\n","initial-response":"Request for additional office supplies due to high workload. List of requested items: printer paper, ink cartridges for HP printer in conference room, sticky notes, binder clips, and highlighters. Requesting delivery information and if there are any questions or concerns.","max-tokens":"256","box-rows":"15","model-temp":"0.0","top-p":"0"},(0,r.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,r.kt)("p",null,"The response here is acceptable, and would be useful. However, with some further finetuning you can get a better result. As the reader of the summaries you don't care that it's an email, you might want a lower level of detail for the summary. Information about the why is irrelevant, same goes for the last sentence about questions and concerns. By simply adding that the goal of the summary is for you to skim the contents and that you want pleasantries removed, the result can be improved. "),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Act as my personal assistant. I am an office administrator. Summarize the following email as concisely as you can, ignore the footer and header and any previous emails. I want to use the summary to skim emails. Remove any pleasantries. \\n\\nEmail: Request for Additional Office Supplies Dear Office Administrator, I hope this email finds you well. I am writing to request additional office supplies for our team. As you know, we have been experiencing a high volume of work lately and have been using our supplies at a faster rate than usual. We would greatly appreciate it if you could provide us with the following items: Printer paper Ink cartridges for the HP printer in the conference room Sticky notes Binder clips Highlighters Please let me know if there are any questions or concerns, and when we can expect the supplies to be delivered. Thank you for your help. \\n\\nBest regards, Your Name Summary:\\n","initial-response":"Request for additional office supplies - printer paper, ink cartridges for HP printer, sticky notes, binder clips and highlighters.","max-tokens":"256","box-rows":"15","model-temp":"0.0","top-p":"0"},(0,r.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,r.kt)("br",null),"Now you're left with only the most important parts of the summary!",(0,r.kt)("h2",{id:"other-usecases"},"Other usecases"),(0,r.kt)("p",null,"Now that you've seen the example of summaries, We will mention a few other use cases for Zapier+GPT-3. One great example is letting GPT-3 categorize your emails. This just comes down to telling it in a prompt to categorize the following email as whatever categories you like."),(0,r.kt)("p",null,"A more in depth example would be having multiple prompts. You can use a prompt to generate a response that agrees with the demands of the email and one that disagrees or denies. Both can be stored in your drafts and be ready to go whenever you want to send it. "),(0,r.kt)("p",null,"If you regularly receive very similar emails, you can use a filter in Zapier to apply a prompt ONLY to that email. This can be a powerful tool when combined with a formatter. You can extract information and export CSV's from them or directly store them in some form of a database. "),(0,r.kt)("h2",{id:"concerns"},"Concerns"),(0,r.kt)("p",null,"Please do keep in mind privacy concerns when running emails through GPT-3 and storing them. GPT-3 sometimes makes mistakes. We highly recommend checking email content before sending."))}w.isMDXComponent=!0}}]);