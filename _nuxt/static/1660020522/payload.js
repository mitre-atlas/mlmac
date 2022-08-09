__NUXT_JSONP__("/", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){return {data:[{data:{slug:a,title:t,toc:[],body:{type:u,children:[{type:b,tag:d,props:{},children:[{type:a,value:"As AI capabilities become more powerful and widespread, we expect the growing use of AI systems to expand the existing threats, introduce new threats, and change the typical character of threats. We expect AI to be used for effective and finely targeted attacks on other AI systems. These attacks could exploit vulnerabilities in AI systems. Such attacks will be difficult to attribute."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"AI (Neural Network) attribution identifies which pre-trained model was used to construct a subsequent model, e.g., via fine-tuning. This could allow intellectual property theft or malicious AI code to be traced back to its origin pre-trained model (e.g., identifying which base model a disinformation bot was derived from)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Developing AI Forensics capabilities and establishing the hardness of attribution is important for AI security. This challenge could contribute to the maturation of AI Forensics as a subfield of AI security. If Blue Teams cannot win for multiple rounds, that establishes that the attribution problem is hard much more effectively than directly trying to convince someone."}]}]},dir:v,path:"\u002Ftext",extension:w,createdAt:r,updatedAt:r}}],fetch:{"0":{overview:{slug:"overview",title:t,toc:[],body:{type:u,children:[{type:b,tag:d,props:{},children:[{type:a,value:"In 2019, the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fopenai.com\u002Fblog\u002Fbetter-language-models\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"announcement of GPT-2"}]},{type:a,value:", a language model that could generate text of \"unprecedented quality,\" brought new concerns to the forefront of responsible AI. Enabled by increases in compute capacity, big tech companies can now train extremely large neural network models on web scale collections of text, creating models that produce text so fluent, "},{type:b,tag:e,props:{href:"https:\u002F\u002Faclanthology.org\u002F2020.acl-main.164.pdf",rel:[h,i,j],target:k},children:[{type:a,value:"humans cannot reliably detect when text is synthetic"}]},{type:a,value:". When these base models are released publicly, they can be fine-tuned at a relatively low cost to produce text tailored to a specific domain, such as sports or politics. Large language models (LLMs) may enable the generation of misinformation at scale, especially when fine-tuned on malicious text. However, it is unclear how widely adversaries use LLMs to generate misinformation today, partly because no general technical method has been widely deployed to attribute a fine-tuned LLM to a base LLM."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The ML Model Attribution Challenge (MLMAC) challenges contestants to develop creative technical solutions for LLM attribution. Contestants will attribute synthetic text written by fine-tuned language models back to the base LLM, establishing new methods that may provide strong evidence of model provenance. Model attribution would allow regulatory bodies to trace intellectual property theft or influence campaigns back to the base model. This competition works toward AI assurance by developing forensic capabilities and establishing the difficulty of model attribution in natural language processing and could contribute to the maturation of AI forensics as a subfield of AI security."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This competition incentivizes open research in this area. Each winning contestant must publish their method, and after the competition concludes, we will release query logs for each fine-tuned model that can enable post-hoc analysis of blind attribution methods. We have planned subsequent activity in this area to institutionalize practical model attribution research."}]}]},dir:v,path:"\u002Foverview",extension:w,createdAt:r,updatedAt:r}},"1":{details:{slug:"competition-details",title:M,toc:[{id:x,depth:f,text:y},{id:z,depth:f,text:A},{id:B,depth:f,text:C},{id:D,depth:f,text:E},{id:F,depth:f,text:G},{id:H,depth:f,text:I},{id:J,depth:f,text:K}],body:{type:u,children:[{type:b,tag:d,props:{},children:[{type:a,value:"The official rules and terms of services can be read "},{type:b,tag:N,props:{to:O},children:[{type:a,value:"here"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:l,props:{id:x},children:[{type:b,tag:e,props:{href:"#schedule",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The competition will begin August 12, 2022, anywhere on Earth (AoE), and conclude four weeks later on September 9, 2022, AoE. The competition will officially launch at DEFCON’s AI Village, and will be promoted through the Village and sponsor social media sites."}]},{type:a,value:c},{type:b,tag:l,props:{id:z},children:[{type:b,tag:e,props:{href:"#threat-model",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We consider a scenario in which a naive adversary has stolen an LLM and fine-tuned it for a specific task. The owners of the base models did not make any attempt to watermark their models. No particular effort has been made by the adversary to obfuscate the fine-tuned model’s provenance. The participants have full access to the base models, but only API access to the fine-tuned models."}]},{type:a,value:c},{type:b,tag:l,props:{id:B},children:[{type:b,tag:e,props:{href:"#scenario",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Participants are tasked with attributing fine-tuned models to a set of base models by any means they deem appropriate. Every contestant will be given full access to every base model. In addition, each contestant will be given blind API access to each fine-tuned model to collect additional evidence. Contestants must submit a solution in the form of ("},{type:b,tag:s,props:{},children:[{type:a,value:P}]},{type:a,value:") pairs. A list of candidate base models will be known, and there will also be a "},{type:b,tag:s,props:{},children:[{type:a,value:"None"}]},{type:a,value:" category to denote that a particular fine-tuned model does not inherit from any of the base models provided."}]},{type:a,value:c},{type:b,tag:l,props:{id:D},children:[{type:b,tag:e,props:{href:"#participating",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Requirements"}]},{type:a,value:". Contestants must register for the competition with a valid GitHub account and agree to "},{type:b,tag:N,props:{to:O},children:[{type:a,value:"terms of service"}]},{type:a,value:" outlining the rules, judging criteria, and legal elements about indemnity and awards disbursement. Contestants may consist of a team, but the team may only participate through a single account. Cooperation or collusion between accounts will disqualify contestants."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Getting started"}]},{type:a,value:". Upon registration, each contestant will be provided with a list of candidate base models, a competition API key, and example code for interacting with the "},{type:b,tag:e,props:{href:Q,rel:[h,i,j],target:k},children:[{type:a,value:L}]},{type:a,value:" inference API that serves the fine-tuned models."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Interacting with the base models"}]},{type:a,value:". The base models are available via the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fhuggingface.co\u002Fmodel-attribution-challenge",rel:[h,i,j],target:k},children:[{type:a,value:"model-attribution-challenge"}]},{type:a,value:" organization on huggingface. Contestants have full access the the base models and are free to query them via the huggingface API or download them."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Interacting with the fine-tuned models"}]},{type:a,value:". The competition API key is used to interact with anonymous fine-tuned models via "},{type:b,tag:e,props:{href:Q,rel:[h,i,j],target:k},children:[{type:a,value:L}]},{type:a,value:". A contestant submits a prompt to the query endpoint and receives the generated text as a response. Fine-tuned models are referred to by a single integer between 0 and 11. For example, to query model 0, one issues a "},{type:b,tag:"code",props:{},children:[{type:a,value:"POST https:\u002F\u002Fapi.mlmac.io:8080\u002Fquery?model=0"}]},{type:a,value:". Details and example code are provided to contestants upon registration. The service counts the model queries for each user."}]},{type:a,value:c},{type:b,tag:l,props:{id:F},children:[{type:b,tag:e,props:{href:"#submission",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Participants can submit their solutions via the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fmlmac.io\u002Fsubmit",rel:[h,i,j],target:k},children:[{type:a,value:"submission form"}]},{type:a,value:". Participants may submit their solutions and revise their submissions as many times as they like. Only the final submission from each participant will be scored for prize consideration. Participants do not receive feedback on their solution upon submission."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Halfway through the competition, on August 26 12:00 PM ET, the most recent submission from each participant will be scored. The leaderboard will be updated publicly with each participant’s score, query count, and submission time. This is done to give participants some limited feedback on their performance and see how they compare to the rest of the field."}]},{type:a,value:c},{type:b,tag:l,props:{id:H},children:[{type:b,tag:e,props:{href:"#evaluation-criteria",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Solutions submitted to "},{type:b,tag:e,props:{href:"https:\u002F\u002Fmlmac.io",rel:[h,i,j],target:k},children:[{type:a,value:L}]},{type:a,value:" will be evaluated by the following rank-ordered criteria:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(1) "},{type:b,tag:g,props:{},children:[{type:a,value:"Correctness of submitted result"}]},{type:a,value:": the solution with a highest number of correct ("},{type:b,tag:s,props:{},children:[{type:a,value:P}]},{type:a,value:") pairs."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(2) "},{type:b,tag:g,props:{},children:[{type:a,value:"Fewest queries to fine-tuned models"}]},{type:a,value:": a tie will be broken by selecting the contestant who used the fewest API queries to interact with the anonymous fine-tuned models. (Contestants may query "},{type:b,tag:s,props:{},children:[{type:a,value:"base"}]},{type:a,value:" models as many times as needed without penalty.)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(3) "},{type:b,tag:g,props:{},children:[{type:a,value:"Earliest submission time"}]},{type:a,value:": any subsequent tie will be broken by selecting the contestant whose final submission was earliest."}]},{type:a,value:c},{type:b,tag:l,props:{id:J},children:[{type:b,tag:e,props:{href:"#prizes",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To be awarded a prize, a winning team must "},{type:b,tag:s,props:{},children:[{type:a,value:"publish"}]},{type:a,value:" their solution. To allow for a variety of backgrounds to participate, we broadly define publishing to include a conference submission, an arxiv paper, or even a blogpost (e.g., on Medium or a personal blog). Proof of submission or publication is provided on a per-candidate basis to the competition organizers."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Prizes will be worth USD $10,000 in total, divided among up to five winning solutions."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"1st place"}]},{type:a,value:". The highest-ranking submission that publishes a solution will be awarded USD $3,000."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"2nd place"}]},{type:a,value:". The second-highest-ranking submission that publishes a solution will be awarded USD $1,500."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Student bonus prizes"}]},{type:a,value:": Up to three (3) awards for student submissions will be awarded, worth the cost of admission plus a $1,500 travel voucher to present a solution at "},{type:b,tag:e,props:{href:"https:\u002F\u002Fcamlis.org",rel:[h,i,j],target:k},children:[{type:a,value:"CAMLIS 2022"}]},{type:a,value:" in October or at "},{type:b,tag:e,props:{href:"https:\u002F\u002Fsatml.org\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"SATML 2023"}]},{type:a,value:" in February, pending the conference organizers’ final location decisions. Participants must be current undergraduate or graduate degree-seeking students at an accredited university. (This award could be added to 1st or 2nd-place prizes if a student wins or a non-winning student)."}]}]},dir:v,path:"\u002Fcompetition-details",extension:w,createdAt:r,updatedAt:r}},"data-v-0d09b922:0":{links:[{name:t,route:"\u002F#overview",items:[]},{name:M,route:"\u002F#details",items:[{id:x,depth:f,text:y},{id:z,depth:f,text:A},{id:B,depth:f,text:C},{id:D,depth:f,text:E},{id:F,depth:f,text:G},{id:H,depth:f,text:I},{id:J,depth:f,text:K}]},{name:"API Docs",route:"\u002Fapi",items:[]},{name:"Results",route:"\u002Fresults",items:[]}],authLinks:[{name:"Submit Answers",route:"\u002Fsubmit",items:[]},{name:"View Query Stats",route:"\u002Fstatus",items:[]}],drawer:false,details:{}}},mutations:[]}}("text","element","\n","p","a",2,"strong","nofollow","noopener","noreferrer","_blank","h2","true",-1,"span","icon","icon-link","2022-08-09T04:45:50.399Z","em","Overview","root","\u002F",".md","schedule","Schedule","threat-model","Threat Model","scenario","Scenario","participating","Participating","submission","Submission","evaluation-criteria","Evaluation Criteria","prizes","Prizes","mlmac.io","Competition Details","nuxt-link","\u002Fterms","fine-tuned model, base model","http:\u002F\u002Fmlmac.io")));