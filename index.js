const app = "I don't do much.";

const token = 'ca66912acf878e51a991889a68f81d029f2370a4';
fetch('https://api.github.com/user/repos', {
    headers: { Auhorization: `token ${token}` },
  }).then(res => res.json()).then(json => console.log(json));
