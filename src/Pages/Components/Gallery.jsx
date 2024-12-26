import React from 'react';
import './gallery.css';
import { Box } from '@mui/material';

export default function Gallery() {
    return (
        <Box mt={2} sx={{ position: "relative", zIndex: 1 }}>
            <InfiniteScrollImage />
            
        </Box>
    );
}

const LOGOS = [
    "https://images.cnbctv18.com/wp-content/uploads/2019/09/music-1019x573.jpg",
    "https://www.alliedmarketresearch.com/blog/Blog_banner_image/ctoykrzsmv.jpeg",
    "https://www.eventbrite.co.uk/blog/wp-content/uploads/2022/06/How-to-Promote-Your-Gigs-768x512.jpg",
    "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
];

const InfiniteScrollImage = () => {
    return (
        <div className="m-auto w-full overflow-hidden">
            <div className="infinite-scroll-wrapper gap-2 flex animate-scroll-left-to-right">
                {LOGOS.map((logo, index) => (
                    <div className="slide flex items-center justify-center" key={index}>
                        <img src={logo} alt={`Logo ${index + 1}`} className="responsive-img" />
                    </div>
                ))}
                {LOGOS.map((logo, index) => (
                    <div className="slide flex items-center justify-center" key={`duplicate-${index}`}>
                        <img src={logo} alt={`Logo ${index + 1} Duplicate`} className="responsive-img" />
                    </div>
                ))}
            </div>
        </div>
    );
};

