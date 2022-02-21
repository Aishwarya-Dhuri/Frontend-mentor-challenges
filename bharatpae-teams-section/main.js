document.addEventListener("DOMContentLoaded", function(event) {     

const teamObj = [
    {
      name : 'Ashneer Grover',
      designation: 'Managing Director & Co-Founder',
      profile: 'images/ashneer.png',
      info: "A man of few words and a private person, Ashneer is a non - smoker and teetotaller, his chosen poison is travel. He prefers to spend his personal time finding the next destination, apartment, car and activities. He also has a flair for interior designing. He doesn’t read at all but is a keen observer. Those who know him well vouch for him as the gossip king and a natural story teller!",
      twitter_link : 'https://twitter.com/ashneergrover',
      linkedin_link: 'https://www.linkedin.com/in/ashneer/'
    },
    {
      name : 'Shashvat Nakrani',
      designation: 'Co-Founder',
      profile: 'images/shashvat.png',
      info: 'Passionate about technology’s potential to radically improve people’s lives, Shashvat is a young man with ideas and willingness to disrupt the financial services space. The entrepreneurial mindset runs in his blood and he believes in redefining and achieving his own rules of success. A big-time Foodie, Shashvat loves travelling to unexplored boundaries and keeps his taste-buds activated with food from every nook and corner of the world.',
      twitter_link : 'https://twitter.com/shashvatnakrani',
      linkedin_link: 'https://www.linkedin.com/in/shashvat-nakrani/'
    },
    {
      name : 'Suhail Sameer',
      designation: 'Chief Executive Officer',
      profile: 'images/suhail.png',
      info: 'A prolific leader and a young achiever, Suhail has close to a decade and half of experience of working with companies from the Consumer (FMCG, retail), Energy (Utilities, Cleantech), and financial services sectors. He has built businesses from scratch and also helped turn around and/or grow existing companies. As the President of BharatPe, Suhail is working closely with Ashneer Grover, Co-Founder and CEO, BharatPe and the Board to build BharatPe as the one-stop destination for all financial and payment needs of the merchant community.',
      twitter_link : 'https://twitter.com/SuhailSameer14',
      linkedin_link: 'https://www.linkedin.com/in/suhail-sameer-8226865/'
    },
    {
      name : 'Bhavik Koladiya',
      designation: '',
      profile: 'images/bhavik.png',
      info: 'Making work better through technology, innovation and a little bit of laughter, Bhavik is a man with wings. He loves everything and anything related to banking and payments. Prior to his stints in the FinTech space, he was flying high with Delta Airlines as a Pilot. A serial entrepreneur, he carries his wide smile and enthusiasm wherever he goes. You can see him playing cricket or cracking jokes as a stress-buster while at work',
      twitter_link : 'https://twitter.com/BhavikKoladiya',
      linkedin_link: 'https://www.linkedin.com/in/koladiya/'
    },
    {
      name : 'Nishit Sharma',
      designation: 'Chief Revenue Officer',
      profile: 'images/nishit.png',
      info: 'A growth hacker with a passion for growing business, Nishit loves to read. A workaholic by nature, he relaxes his nerves by spending time with family and reading to learn.',
      twitter_link : null,
      linkedin_link: 'https://www.linkedin.com/in/sharmanishit/'
    },
    {
      name : 'Nishant Jain',
      designation: 'Chief Business Officer',
      profile: 'images/nishant.png',
      info: 'Passionate about growing businesses, Nishant is a travel enthusiast. Father of two daughters and husband to a lawyer, he loves indulging in adventures and extreme sports. Nishant has travelled to 35+ countries, has sky-dived, went underwater, and continues to explore the adventurous side of him at work too.',
      twitter_link : null,
      linkedin_link: 'https://www.linkedin.com/in/nishantjaincocacola/'
    },
    {
      name : 'Ankur Jain',
      designation: 'Chief Product Officer',
      profile: 'images/ankur.png',
      info: 'Having worked in three different continents, hiked the Great Wall of China, scuba dived in the Indian Ocean, traveled through the Amazon Rainforest in Brazil and climbed up an active volcano in Hawaii, Ankur\'s passion lies in building products that can be used by millions of people. Skiing, playing table tennis and coloring with his 2 year old daughter is his favorite past time.',
      twitter_link : 'https://twitter.com/ankur10',
      linkedin_link: 'https://www.linkedin.com/in/ankjain/'
    },
    {
      name : 'Vijay Kumar Aggarwal',
      designation: 'Chief Technology Officer',
      profile: 'images/vijay.png',
      info: 'A high-tech mind with a simple lifestyle, Vijay loves spending time with his family. Apart from the undying passion for building products and teams that stand amongst the best in the world, he loves reading and watching NatGeo. From fiction, history, economics, politics, technology to mythology and business, he is a bookworm with a knack for systems thinking.',
      twitter_link : 'https://twitter.com/vijayaggarwal',
      linkedin_link: 'https://www.linkedin.com/in/aggarwalvijay/'
    },
    // {
    //   name : 'Dhruv Bahl',
    //   designation: 'Chief Operating Officer',
    //   profile: 'images/dhruv.png',
    //   info: 'Responsible for ensuring that BharatPe has the best working environment and processes, Dhruv is always on his toes to ensure the business is well-coordinated and productive. An INSEAD alumni with extensive exposure to multiple industries and functions, he is on a mission on building BharatPe with roles that create speed, efficiency, and support rapidly shifting business demands.',
    //   twitter_link : 'https://twitter.com/dhruvdbahl',
    //   linkedin_link: 'https://www.linkedin.com/in/dhruv-dhanraj-bahl-3857a033/'
    // }
  ]
  const teamsec=document.getElementById('team-sec');

  teamObj.forEach(item =>{
      const member=document.createElement("div");
      member.classList.add("team-tile");

    //check twitter link is null
    const twitterhandle = item.twitter_link ? `<a href=${item.twitter_link} target="_blank">
                                                    <img src="images/twitter.png">
                                                </a>` : ``;

    member.innerHTML=`<div class="profile-snap">
                            <img src=${item.profile}>
                            <div class="profile-info">
                                ${item.info}
                            </div>
                        </div>
                        <div class="profile-content">
                            <h4 class="name">${item.name}</h4>
                            <p class="designation">${item.designation}</p>
                            <div class="social-icons">
                                 ${twitterhandle}
                                <a href=${item.linkedin_link} target="_blank">
                                    <img src="images/linkedin.png">
                                </a>
                            </div>
                        </div>`
    teamsec.appendChild(member);

  });

})