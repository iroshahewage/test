const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const util = require("util");

dotenv.config();

const app = express();

app.get("/", async (req, res) => {
  try {
    const signAsync = util.promisify(jwt.sign);

    const payload = { id: 123 };
    const token = await signAsync(
      payload,
      "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAndegfGWAPIlATq6pKYUGacpWajI1tOSfnHEmoCkR6WzzSX/D\nn3hIukJMI3wWrSzl+VH+IbST1cM2OGHvIpM2CPQGm4q6SCsPwp6kkZtimuna/PLX\nleLvQh5SYi2v5+VkUsfCZ1ahGWQhrOVCW2rXUQchZblN0o7oqUdx912WisFSa2LW\n+U+CPWZoXuEQwIGCCfkLHEyF0nx5nXht6s2Dh4HZYjsBeEqJZ/TnsMSE3b6phF8l\nGEimUpS9E1L/6RWlx4NZ8dA6BObgXGFgtgvo2OYy0HSZfGBPRLlyoAalt3KNHPnN\nTeeUME9GnykKpyZuK2Eu4UrdCtMfBZN6SKuRCwIDAQABAoIBAAhK0riWUIVdpI49\nqM9wmKSoJ6AOoTmupR//5cqWPcWonqNm3e0b0Z5Pa1aV508Tw8U0ZIh6xyV8yvVt\nV7XWTAluYIZ9ZEn0UTClSvoHUsfWr1WIoIDUWkN7+lIEGnCxYXLj4beyGmaOFyLR\nLIpG86bjHAMPGCKOtXRnN3qKZSVG66BOAxe1CrJYhmmDl34OMZy9LoUnczintetn\n+Z+Wg5/7Kk4YRleWq85WldekFtQLpPXPLh6WXSW82mql3peDCVqjT6GzuQOP4FPb\nSYqQtAiODNKuBzeGlBXiDFabdQAEJv65u/n9OKqaMxSypHI1MyMteC3acI4B4pkH\nD1KceUECgYEAzVZ5cWI6fTHy8MM0aNukV0TH8pFZCDhAb6sy6VfocSSpX9ja9LGs\notfxgakoYGweA1Omy2/XJ16oGjAl6sdlX7KLE1a3ezHA8BOHP31uA+re/Cq41GCs\n5bi0v7Ap2VnrYAbMlysvZZhVATpJM04z2kOCZKI47wvcvVCvZtIruWECgYEAxMk/\nGODBtqWk7jMO83ax6vrQ7+uwBhuwgirv3DHtYjSJ75dPgskRye+HXPEV+Sjy4k8L\nx8sOZu3TymgGZphPeaIeQCLXHLZhpyPtSJC1MmMhD3upCl1e052OT7NHhnAH4bN0\ndusWkAKcYsV7Ab2ADBuTS1/2dnnpLRIU5oDZhesCgYBqtLptcpdkgfV2qmps518y\nvpqNcnzq6ZiKr1PIsRco3N1r4px+Nmq5QTDOqaJC4UyDfBAcfiU331fKLCU4KaCD\np5vgU9sLmSJjYDKTitIGFSMFtgnQy+BtjJvZVWmZ+sF3aHEfSaDa0duyxKBPmh8W\nGKkFNMwTZX2zn99WtndkYQKBgBji2nfq9JSEnjcBfgKMIDP3RDUTOU+McOYFSBAw\nwDSLMGZ8XDHN+9Ht2NCILJ817oFwPa0moMujiAUw4p5W5LYdKnYx8cJPzkm04W0r\n375fiu7KVLZa2IMqibTKl2EJCfYhG7luQYw0yFI1ZzjxHiBp3FbL6/9Pq41nm/0K\njnfBAoGBAK52aoPXsBxCYGZYWWw9tC+prCq72yayi9dN9E83WmAoAJ0cCDPKlUhz\nUZzz2FA/2hVAw3TMLkS1a3/4+PQQ+wEeCvWTG/+44AhcGwM1qAh7l4+lqIiipHJX\n8Qm1cFL6CMhVAlNH623BYpLDtKKWmag4upstCntB8HBFwVOAgNiI\n-----END RSA PRIVATE KEY-----\n",
      {
        algorithm: "RS256",
      }
    );

    res.send(token);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(8000, () => {
  console.log("server is running");
});
