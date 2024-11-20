import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

const LinksComponent = () => {
  const linksData = [
    {
      category: "YouTube Channels",
      links: [
        { name: "CS 701 - R&D Conundrums", url: "https://www.youtube.com/@CS701-RDConundrums-x4h" },
        { name: "Decks & Wheels (Skateboarding, Health, Gym'", url: "https://www.youtube.com/@DecksWheels-m1x" },
        { name: "Vibrant Alternative Joy (Art, Music, Guitar)", url: "https://www.youtube.com/channel/UCZ0NtZQkrfheUg3BCpcLq8A" },
        { name: "Embassy of Love (Philosophy, Spirituality and Religions)", url: "https://www.youtube.com/@EmbassyofLove-f6n" },
        { name: "Apostrophe (Politics)", url: "https://www.youtube.com/@Apostrophe-r2t" },
        { name: "Proleptic Anemora (LifeStyle)", url: "https://www.youtube.com/@ProlepticAnemoia-t7p" }
        { name: "Quoi NT Um - Relationships (Love and Relationships)", url: "https://www.youtube.com/@QuoiNTUm-Relationships-j8o" }
      ],
    },
    {
      category: "Medium",
      links: [
        { name: "CSRD Conundrums - Medium", url: "https://medium.com/@csrd-conundrums" },
      ],
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Links
      </Typography>
      {linksData.map((category, index) => (
        <Box key={index} sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            {category.category}
          </Typography>
          <List>
            {category.links.map((link, idx) => (
              <ListItem key={idx} sx={{ paddingLeft: 0 }}>
                <ListItemText
                  primary={
                    <Link href={link.url} target="_blank" rel="noopener" underline="hover">
                      {link.name}
                    </Link>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default LinksComponent;
