import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import { MDBView, MDBBtn } from 'mdbreact';

import venetianPool from '../../../images/undef/venetian-pool.jpg';
import wynwoodWalls from '../../../images/undef/wynwood-walls.jpg';
import viscaya from '../../../images/undef/viscaya.jpg';
import GrapelandWaterPark from '../../../images/undef/GrapelandWaterPark.jpg';
import micracleMile from '../../../images/undef/micracle-mile.jpg';
import granadaGolfCourse from '../../../images/undef/granada-golf-course.jpg';
import brickellCityCenter from '../../../images/undef/brickell-city-center.jpg';
import biltmore from '../../../images/undef/biltmore.jpg';
import tropicalPark from '../../../images/undef/tropical-park.jpg';
import theFalls from '../../../images/undef/thefalls.jpg';
import deeringEstate from '../../../images/undef/deeringstate.jpg';
import zooMiami from '../../../images/undef/miami-zoo.jpg';
import miamiSeaquarium from '../../../images/undef/seaquarium.jpg';
import childrensMuseul from '../../../images/undef/miami-childrens-museum.jpg';
import baysideMarketplace from '../../../images/undef/bayside.jpg';
import jungleIsland from '../../../images/undef/jungle-island.jpg';
import parezArt from '../../../images/undef/perez-art-museum.jpg';
import aaa from '../../../images/undef/aaarena.jpg';
import frostMuseum from '../../../images/undef/frost-science-museum.jpg';
import adrienne from '../../../images/undef/adrienne-arsht-center.jpg';
import calleocho from '../../../images/undef/calle-ocho.jpg';
import cocogrove from '../../../images/undef/coconut-grove.jpg';
import coralreefpark from '../../../images/undef/coral-reef-park.jpg';
import countryclubprado from '../../../images/undef/country-club-prado.jpg';
import dolphinmall from '../../../images/undef/dolphin-mall.jpg';
import doralcitycenter from '../../../images/undef/dora-city-center.jpg';
import downtowndadeland from '../../../images/undef/downtown-dadeland.jpg';
import dtmiami from '../../../images/undef/downtown-miami.jpg';
import lincolnrd from '../../../images/undef/lincoln-road.jpg';
import miamiairport from '../../../images/undef/miami-airport.jpg';
import portmiami from '../../../images/undef/port-miami.jpg';
import virgintrains from '../../../images/undef/virgin-trains.jpg';
import daniabeach from '../../../images/undef/dania-beach.jpg';
import daniapointe from '../../../images/undef/dania-pointe.jpg';
import fta from '../../../images/undef/fta.png';
import seminole from '../../../images/undef/seminole-casino.jpg';
import lasolas from '../../../images/undef/lasolas.jpg';
import brightlineft from '../../../images/undef/brightline.jpeg';
import browardcenter from '../../../images/undef/broward-center.jpg';
import thewharft from '../../../images/undef/the-wharft.jpg';
import tidalcovewaterpark from '../../../images/undef/tidalcovewaterpark.jpeg';
import sunnyislesbeach from '../../../images/undef/sunnyislesbeach.jpeg';
import oletariverstatepark from '../../../images/undef/oletariverstatepark.jpeg';
import judgesrthursnydertenniscenter from '../../../images/undef/judgesrthursnydertenniscenter.jpeg';
import hardrockstadium from '../../../images/undef/hardrockstadium.jpeg';
import gulfstreamparkracingandcasino from '../../../images/undef/gulfstreamparkracingandcasino.jpeg';
import balharborshops from '../../../images/undef/balharborshops.jpeg';
import aventuramall from '../../../images/undef/aventuramall.jpeg';
import swampshopandthunderbirddriveintheater from '../../../images//undef/swampshopandthunderbirddriveintheater.png';
import drvpnkstadium from '../../../images/undef/drvpnkstadium.jpeg';
import lauderdalebeach from '../../../images/undef/lauderdalebeach.png';
import uncleberniesamusementpark from '../../../images/undef/uncleberniesamusementpark.jpeg';
import bbandtcenter from '../../../images/undef/bbandtcenter.jpeg';
import roundup from '../../../images/undef/roundup.jpeg';
import seminole2 from '../../../images/undef/seminole2.jpg';
import artsparkatyoungcircle from '../../../images/undef/artsparkatyoungcircle.jpg';
import downtownhollywood from '../../../images/undef/downtownhollywood.jpg';
import holllywoodbeach from '../../../images/undef/holllywoodbeach.jpeg';
import holllywoodbeachboardwalk from '../../../images/undef/holllywoodbeachboardwalk.jpg';
import waterwayadventures from '../../../images/undef/waterwayadventures.jpg';
import fta2 from '../../../images/undef/fta2.png';
import sawgrassmillsoutlets from '../../../images/undef/sawgrassmillsoutlets.jpg';
import marlinsstadiumloandepotpark from '../../../images/undef/marlinsstadiumloandepotpark.jpeg';
import mocanorthmiami from '../../../images/undef/mocanorthmiami.jpeg';
import ipictheaters from '../../../images/undef/ipictheaters.jpeg';
import theancientspanishmonastery from '../../../images/undef/theancientspanishmonastery.jpeg';
import meyeramphitheater from '../../../images/undef/meyeramphitheater.jpeg';
import palmbeachinternationalairport from '../../../images/undef/palmbeachinternationalairport.jpeg';
import thesquare from '../../../images/undef/thesquare.jpeg';
import palmbeachisland from '../../../images/undef/palmbeachisland.jpeg';
import flaglermuseum from '../../../images/undef/flaglermuseum.jpeg';
import worthavenue from '../../../images/undef/worthavenue.jpeg';
import greencomplexforsportsrecreation from '../../../images/undef/greencomplexforsportsrecreation.jpeg';
import amccityplace20 from '../../../images/undef/amccityplace20.jpeg';
import rapidswaterpark from '../../../images/undef/rapidswaterpark.jpeg';
import manateelagoon from '../../../images/undef/manateelagoon.jpeg';
import palmbeachzooconservationsociety from '../../../images/undef/palmbeachzooconservationsociety.jpeg';
import johndmacarthurbeachstatepark from '../../../images/undef/johndmacarthurbeachstatepark.jpeg';
import ballparkofthepalmbeaches from '../../../images/undef/ballparkofthepalmbeaches.jpeg';
import thegardensmall from '../../../images/undef/thegardensmall.jpeg';
import westpalmbeachinternationalairport from '../../../images/undef/palmbeachinternationalairport.jpeg';
import fortlauderdalehollywoodinternationalairport from '../../../images/undef/fortlauderdalehollywoodinternationalairport.jpeg';
import hollywoodbeachgolfclub from '../../../images/undef/hollywoodbeachgolfclub.jpeg';
import hollywoodbeachbroadwalk from '../../../images/undef/hollywoodbeachbroadwalk.jpeg';
import youngcircleshoppingcenter from '../../../images/undef/youngcircleshoppingcenter.jpeg';


const AreTmp = (i, n, d) => {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={i}
        nbaNAME={n}
        nbaDESCRIPTION={d}
      />
    </div>
  )
}


const Are1 = () => {
  return (
    AreTmp(
      GrapelandWaterPark,
      "GrapelandWaterPark",
      "Perfect for families, the Grapeland Water Park features 4 pools with interactive activities for kids of all ages. It is open seasonally. Visit website for hours of operation."
    )
  );
}

const Are2 = () => {
  return (
    AreTmp(
      micracleMile,
      "Miracle Mile",
      "Located near the Business District in Coral Gables, Miracle Mile is the Gables’ favorite hot spot for dining, boutique shopping, and discovering local art. Take the trolley for easy commuting."
    )
  );
}

const Are3 = () => {
  return (
    AreTmp(
      venetianPool,
      "Venetian Pool",
      "Open seasonally for swimmers, the Venetian Pool is a public pool fed with natural spring water. Originally built in 1923, the pool maintains much of its original charm and beauty."
    )
  );
}

const Are4 = () => {
  return (
    AreTmp(
      granadaGolfCourse,
      "Granada Golf Course",
      "Florida’s oldest 9-hole course, the Granada Golf Course is a favorite attraction for locals and visitors alike. The course features a variety of options for golfers of any skill level."
    )
  );
}

const Are5 = () => {
  return (
    AreTmp(
      biltmore,
      "The Biltmore",
      "A luxury hotel in the heart of Coral Gables, The Biltmore is the perfect place to enjoy a relaxing stay. Enjoy a dip in the stunning pool or indulge in their Sunday Brunch."
    )
  );
}

const Are6 = () => {
  return (
    AreTmp(
      wynwoodWalls,
      "Wynwood Walls",
      "Established in 2009 and grown to become one of Miami’s favorite artistic destinations, the Wynwood Walls is a public exhibition featuring urban graffiti wall art from global artists."
    )
  );
}

const Are7 = () => {
  return (
    AreTmp(
      viscaya,
      "Vizcaya Museum & Gardens",
      "Experience a piece of history in Miami’s backyard. Originally built in 1916, Vizcaya Museum & Gardens is a 10-acre property filled with gardens, a 34-room estate, and waterfront views."
    )
  );
}

const Are8 = () => {
  return (
    AreTmp(
      brickellCityCenter,
      "Brickell City Centre",
      "One of Brickell’s most notable attractions, Brickell City Centre is a crossroads for fashion and cuisine, while offering the best in residential and office spaces."
    )
  );
}

// 2nd round of changes
const Are9 = () => {
  return (
    AreTmp(
      tropicalPark,
      "Tropical Park",
      "Tropical Park is the ideal spot in Olympia Heights for a nature getaway. With miles of paved pathways, this is the perfect spot for cycling, running, or simply enjoying a walk."
    )
  );
}

const Are10 = () => {
  return (
    AreTmp(
      theFalls,
      "The Falls",
      "With over 100 stores to explore, The Falls is an upscale shopping haven located in Kendall. Whether you’re shopping or dining, you’ll always find something the whole family can enjoy."
    )
  );
}

const Are11 = () => {
  return (
    AreTmp(
      deeringEstate,
      "Deering Estate",
      "One of Miami’s cultural landmarks, The Deering Estate preserves the 1920s home of Charles Deering. Enjoy tours, art exhibits, nature hikes, and more at this historical destination."

    )
  );
}

const Are12 = () => {
  return (
    AreTmp(
      zooMiami,
      "Zoo Miami",
      "The only subtropical zoo in the US, the Miami Zoo is one of South Florida’s best family friendly destinations! Interact with wildlife and endangered species at Florida’s biggest zoological garden."

    )
  );
}

const Are13 = () => {
  return (
    AreTmp(
      miamiSeaquarium,
      "Miami Seaquarium",
      "The Miami Seaquarium is one of South Florida’s favorite visitor attractions! Get up close and personal with marine life with extraordinary exhibits at Miami’s favorite aquarium."

    )
  );
}

const Are14 = () => {
  return (
    AreTmp(
      childrensMuseul,
      "Miami Children’s Museum",
      "A dreamland for every kid, the Miami Children’s Museum is a non-profit educational space that encourages kids to use their imagination and proves that learning can be fun!"

    )
  );
}

const Are15 = () => {
  return (
    AreTmp(
      baysideMarketplace,
      "Bayside Marketplace",
      "Located in Downtown Miami, Bayside Marketplace is one of Miami’s top shopping and dining destinations. Enjoy a drink by the water and explore this iconic South Florida spot!"

    )
  );
}

const Are16 = () => {
  return (
    AreTmp(
      jungleIsland,
      "Jungle Island",
      "Jungle Island is one of Miami’s most famous tourist destinations! Enjoy beautiful landscapes and exotic animals right before your eyes at one of Miami’s best landmarks."

    )
  );
}

const Are17 = () => {
  return (
    AreTmp(
      parezArt,
      "Perez Art Museum",
      "The famous flagship museum of Miami, The Perez Art Museum exhibits international art of the 20th and 21st centuries. Experience modern art while enjoying beautiful seaside views."

    )
  );
}

const Are18 = () => {
  return (
    AreTmp(
      aaa,
      "American Airlines Arena",
      "Miami’s top destination for all things sports and entertainment, the American Airlines Arena is a hub for the hottest live events in town. Check out their site for info on upcoming events."

    )
  );
}

const Are19 = () => {
  return (
    AreTmp(
      frostMuseum,
      "Frost Museum",
      "The Frost Museum is sure to entice visitors of all ages with the wonders of science! Experience features such as the aquarium and an array of interactive exhibits for the whole family to enjoy."

    )
  );
}

// batch 3
const Are20 = () => {
  return (
    AreTmp(
      adrienne,
      "Adrienne Arsht Center",
      "Located in the heart of Downtown Miami, the Adrienne Arsht Center is one of the leading performing arts centers in the country. Visit their website for information on upcoming live events."

    )
  );
}

const Are21 = () => {
  return (
    AreTmp(
      calleocho,
      "Calle Ocho",
      "Experience Miami’s Cuban culture at the world famous Calle Ocho! Located in Little Havana, Calle Ocho’s colorful restaurants, art, and more are sure to transport you to the heart of Havana."

    )
  );
}

const Are22 = () => {
  return (
    AreTmp(
      cocogrove,
      "Coconut Grove",
      "A hidden gem in Miami, Coconut Grove is a charming destination to enjoy brunch in one of the numerous sidewalk cafes or linger in one of the many art galleries."

    )
  );
}

const Are23 = () => {
  return (
    AreTmp(
      coralreefpark,
      "Coral Reef Park",
      "Coral Reef Park is any nature lover’s heaven. Spanning across 50 acres, this park is complete with sports fields, green spaces, and a beautifully tranquil canal."

    )
  );
}

const Are24 = () => {
  return (
    AreTmp(
      countryclubprado,
      "Country Club Prado",
      "One of the most beautiful spots in Coral Gables, Country Club Prado is the perfect place to spend your evening enjoying the gorgeous scenery this local area has to offer."

    )
  );
}

const Are25 = () => {
  return (
    AreTmp(
      dolphinmall,
      "Dolphin Mall",
      "Miami’s largest shopping center, the Dolphin Mall is a hub for retail, dining, and entertainment. Featuring over 240 retail outlets, it is the perfect place to spend an afternoon in West Miami."

    )
  );
}

const Are26 = () => {
  return (
    AreTmp(
      doralcitycenter,
      "Doral City Center",
      "City Place Doral is the newest addition to the area for retail shopping and entertainment. Featuring weekly live entertainment, bowling, and cinemas, you’ll never be bored here."

    )
  );
}

const Are27 = () => {
  return (
    AreTmp(
      downtowndadeland,
      "Downtown Dadeland",
      "Located just across the street from Dadeland Mall, Downtown Dadeland is filled with the finest restaurants, shops, fitness centers, and more to fill your day."

    )
  );
}

const Are28 = () => {
  return (
    AreTmp(
      dtmiami,
      "Downtown Miami",
      "Downtown Miami is truly the heart of the city. Spend your day walking through this cultural hub filled with restaurants, open-air malls, and department stores."
    )
  );
}

const Are29 = () => {
  return (
    AreTmp(
      lincolnrd,
      "Lincoln Road",
      "Lincoln Road is Miami’s premier shopping and entertainment center. Experience the over 200 luxury stores, fine dining restaurants, and the best bars South Florida has to offer."

    )
  );
}

const Are30 = () => {
  return (
    AreTmp(
      miamiairport,
      "Miami International Airport",
      "Conveniently catch domestic and international flights from the Miami International Airport, and enjoy easy commuting to surrounding areas through their taxi and shuttle services."

    )
  );
}

const Are31 = () => {
  return (
    AreTmp(
      portmiami,
      "Port of Miami",
      "The Port of Miami is the largest passenger port in the world! Whether your boarding a cruise or simply ship watching, your sure to get the best ocean views from this port."

    )
  );
}

const Are32 = () => {
  return (
    AreTmp(
      virgintrains,
      "Virgin Trains",
      "Whether you're commuting to work, or exploring Miami, Virgin Trains can take you anywhere you need to go. With speeds up to 79 mph, you’ll never have to worry about being late again."

    )
  );
}

// 2020
const Are33 = () => {
  return (
    AreTmp(
      daniabeach,
      "Dania Beach",
      "With its award-winning 'Blue Wave Beaches,' nature activities and proximity to Fort Lauderdale and Hollywood, Dania Beach is an appealing vacation spot. It's also the home of the world-famous Dania Jai Alai in the center of the city's dining and entertainment district. "

    )
  );
}
const Are34 = () => {
  return (
    AreTmp(
      daniapointe,
      "Dania Pointe",
      "Dania Pointe is the newest addition to the area for retail shopping and entertainment. Featuring weekly live entertainment, bowling and dining options, you’ll never be bored here."

    )
  );
}
const Are35 = () => {
  return (
    AreTmp(
      fta,
      "Fort Lauderdale-Hollywood International Airport",
      "Fort Lauderdale–Hollywood International Airport is a major public airport in Broward County, Florida, United States, and is one of three airports serving the Miami metropolitan area. "

    )
  );
}
const Are36 = () => {
  return (
    AreTmp(
      seminole,
      "Seminole Hardrock Hotel and Casino",
      "Seminole Hard Rock Hotel & Casino Hollywood is South Florida's iconic entertainment destination that fuses an electrifying nightlife scene and non-stop gaming action in one singular setting. "

    )
  );
}
const Are37 = () => {
  return (
    AreTmp(
      lasolas,
      "Las Olas",
      "Las Olas Boulevard is the very heart and soul of Fort Lauderdale. Stretching from the beach at A1A and rising over the fabulous Intracoastal Waterway with magnificent views. Las Olas has become the premier destination for shopping, dining, events, entertainment, galleries or even taking a nice walk. "

    )
  );
}
const Are38 = () => {
  return (
    AreTmp(
      brightlineft,
      "Brightline Fort Lauderdale",
      "Brightline trains are like nothing you’ve ever seen before. Fort Lauderdale station is an inter-city rail station located in City of Fort Lauderdale. Connecting you to local cities like Miami and West Palm Beach."

    )
  );
}
const Are39 = () => {
  return (
    AreTmp(
      browardcenter,
      "Broward Center of Performing Arts",
      "Opened in 1991, the Broward Center for the Performing Arts is the destination of choice in South Florida for spectacular entertainment. Check out their site for info on upcoming events."

    )
  );
}
const Are40 = () => {
  return (
    AreTmp(
      thewharft,
      "The Wharf Fort Lauderdale",
      "An outdoor pop-up event space anchored with live music, cocktails, eats & good times in Las Olas on the banks of the New River. The place is amazingly constructed with an open format that really highlights the best parts of living downtown."

    )
  );
}
// nomi
const Are41 = () => {
  return (
    AreTmp(
      oletariverstatepark,
      "Oleta River State Park",
      "The Oleta River State Park is a 1,043-acre Florida State Park on Biscayne Bay in the municipal suburb of North Miami in metropolitan Miami, Florida."

    )
  );
}

const Are42 = () => {
  return (
    AreTmp(
      balharborshops,
      "Bal Harbour Shops",
      "Bal Harbour Shops is an open-air shopping mall in Bal Harbour, a suburb of Miami, Florida"

    )
  );
}

const Are43 = () => {
  return (
    AreTmp(
      tidalcovewaterpark,
      "Tidal Cove Water Park",
      "Tidal Cove is an Aventura waterpark with multiple thrilling waterslides, a gravity-​defying raft ride, a slow-moving lazy river, and a kid-friendly water playground."

    )
  );
}

const Are44 = () => {
  return (
    AreTmp(
      gulfstreamparkracingandcasino,
      "Gulfstream Park Racing and Casino",
      "Gulfstream Park | Entertainment destination featuring thoroughbred racing, casinos, shopping & dining. In Hallandale Beach, FL. Minutes from Miami."

    )
  );
}

const Are45 = () => {
  return (
    AreTmp(
      aventuramall,
      "Aventura Mall",
      "Chic 3-story mall features luxe designer shops, dining & a theater, plus an interactive playground."

    )
  );
}

const Are46 = () => {
  return (
    AreTmp(
      sunnyislesbeach,
      "Sunny Isles Beach",
      "Sunny Isles Beach is a city located on a barrier island in northeast Miami-Dade County, Florida, United States. The city is bounded by the Atlantic Ocean on the east and the Intracoastal Waterway on the west."

    )
  );
}

const Are47 = () => {
  return (
    AreTmp(
      judgesrthursnydertenniscenter,
      "Judge Arthur Snyder Tennis Center",
      "The Judge Arthur I. Snyder Tennis Center in North Miami Beach has ample digs for tennis, paddleball and racquet ball. To be specific, there are 12 clay courts."

    )
  );
}

const Are48 = () => {
  return (
    AreTmp(
      hardrockstadium,
      "Hard Rock Stadium",
      "Hard Rock Stadium is a multi-purpose stadium located in Miami Gardens, Florida, a city north of Miami. It is the home stadium of the Miami Dolphins of the National Football League."

    )
  );
}

// 2022

const Are49 = () => {
  return (
    AreTmp(
      swampshopandthunderbirddriveintheater,
      "Swap Shop & Thunderbird Drive-In Theater",
      "The Fort Lauderdale Swap Shop is a 14-screen drive-in theater in Fort Lauderdale, Florida, that doubles as the largest drive-in and largest daily flea market in the world."

    )
  );
}

const Are50 = () => {
  return (
    AreTmp(
      drvpnkstadium,
      "DRV PNK Stadium",
      "DRV PNK Stadium is a soccer-specific stadium in Fort Lauderdale, Florida. Built on the site of the former Lockhart Stadium, the 18,000-seat stadium is the home pitch of Inter Miami CF of Major League Soccer and its MLS Next Pro reserve side Inter Miami CF II."

    )
  );
}

const Are51 = () => {
  return (
    AreTmp(
      lauderdalebeach,
      "Lauderdale Beach",
      "Located on a barrier island that’s seven feet above sea level, the seaside town of Lauderdale-By-The-Sea features beach views that stretch for miles. Below the water, you’ll find a cool shipwreck snorkel trail where you can dive to see the SS Copenhagen, a British cargo steamer that struck a reef and sank in 1900."

    )
  );
}

const Are52 = () => {
  return (
    AreTmp(
      uncleberniesamusementpark,
      "Uncle Bernie’s Amusement Park",
      "Admission-free family destination featuring pay-by-the-ride carnival attractions."

    )
  );
}

const Are53 = () => {
  return (
    AreTmp(
      bbandtcenter,
      "BB&T Center",
      "BB&T Arena, formerly The Bank of Kentucky Center, is a 10,000-seat multi-purpose arena in Highland Heights, Kentucky, on the campus of Northern Kentucky University. The arena was topped off on June 21, 2007, and the first event held there was NKU's graduation ceremony on May 10, 2008."

    )
  );
}

const Are54 = () => {
  return (
    AreTmp(
      roundup,
      "Round Up",
      "Round Up Nightclub is known worldwide for its unique Country Western Dancing, Fun Atmosphere & Live Entertainment.  Located in 'Cowboy Town' -  Davie Florida, Round Up has been named #1 Dance Club & Best Country Bar in South Florida"

    )
  );
}

const Are55 = () => {
  return (
    AreTmp(
      seminole2,
      "Seminole Hardrock Hotel and Casino",
      "Seminole Hard Rock Hotel & Casino Hollywood is South Florida's iconic entertainment destination that fuses an electrifying nightlife scene and non-stop gaming action in one singular setting."

    )
  );
}

const Are56 = () => {
  return (
    AreTmp(
      artsparkatyoungcircle,
      "ArtsPark at Young Circle",
      "Opened in 2007, this 10-acre park features an amphitheater, a playground, an arts pavilion & more."

    )
  );
}

const Are57 = () => {
  return (
    AreTmp(
      downtownhollywood,
      "Downtown Hollywood",
      "Characterized by quaint sidewalk cafés, brick-lined walks, and six blocks of unique boutiques, shops, art galleries and dozens of excellent restaurants along Hollywood Boulevard and Harrison Street, this pedestrian-friendly environment is the perfect place to enjoy South Florida."

    )
  );
}

const Are58 = () => {
  return (
    AreTmp(
      holllywoodbeach,
      "Hollywood Beach",
      "Hollywood Beach is known for its Atlantic Ocean-facing beaches and 'Old Florida' feel. Locals and visitors skate, cycle, stroll, and ride foot pedal buggies along Hollywood Beach Broadwalk, a palm-lined brick promenade with tiki bars, seafood eateries, motels, and hotels, including the splashy Margaritaville Hollywood Beach Resort."

    )
  );
}

const Are59 = () => {
  return (
    AreTmp(
      holllywoodbeachboardwalk,
      "Hollywood Beach Broadwalk",
      "Nestled between Fort Lauderdale and Miami is Hollywood, a classic Florida beachtown that’s enchanted visitors since the 1920s. A trip Advisor Traveler’s Choice Winner, Hollywood Beach features a one-of-a-kind oceanfront promenade called the Hollywood Beach Broadwalk that stretches nearly two and a half miles along the Atlantic. "

    )
  );
}

const Are60 = () => {
  return (
    AreTmp(
      waterwayadventures,
      "Waterway Adventures)",
      "Unique hop on hop off boat tour with 16 different stops. With the unlimited all day pass you can explore downtown Fort Lauderdale with it’s breathtaking real estate and diverse bar selection, you can head up the Intracoastal to see some of the finest yachts in the world as you pass the marina and Fort Lauderdale Beach."

    )
  );
}

const Are61 = () => {
  return (
    AreTmp(
      fta2,
      "Fort Lauderdale-Hollywood International Airport",
      "Fort Lauderdale–Hollywood International Airport is a major public airport in Broward County, Florida, United States, and is one of three airports serving the Miami metropolitan area. "

    )
  );
}

const Are62 = () => {
  return (
    AreTmp(
      sawgrassmillsoutlets,
      "Sawgrass Mills Outlets",
      "Sawgrass Mills Outlet Mall is located in Sunrise, Florida. It is the largest mall in Broward County and all of Florida. When we say “largest”, we mean wear the most comfortable shoes you have and print out a map of the mall because you will be in Sawgrass for a long time. Sawgrass is so big that the mall itself is divided into 3 parts: The main mall “Avenue”, “Fashion Avenue”, and the “Oasis”. "

    )
  );
}

const Are63 = () => {
  return (
    AreTmp(
      marlinsstadiumloandepotpark,
      "Marlins Stadium",
      "LoanDepot Park is a retractable roof stadium located in Miami, Florida. It is the home of Major League Baseball's Miami Marlins. It is located on 17 acres of the former Miami Orange Bowl site in Little Havana, about 2 miles west of Downtown. Construction was completed in March 2012 for the 2012 season."

    )
  );
}

const Are64 = () => {
  return (
    AreTmp(
      mocanorthmiami,
      "Moca North Miami",
      "The Museum of Contemporary Art is a collecting museum located in North Miami, Florida. The 23,000-square-foot building was designed by the architecture firm Gwathmey Siegel & Associates Architects, New York City. "

    )
  );
}

const Are65 = () => {
  return (
    AreTmp(
      theancientspanishmonastery,
      "The Ancient Spanish Monastery",
      "he Ancient Spanish Monastery is located at 16711 West Dixie Highway, North Miami Beach, FL 33160. It is open from 10:00 a.m. to 4:00 p.m., Monday through Friday. Operating hours vary on the weekends. The latest any visitor is allowed to come on property, unless they have special permission, is 4:00 p.m."

    )
  );
}

const Are66 = () => {
  return (
    AreTmp(
      ipictheaters,
      "IPIC Theaters",
      "Entertainment and fine dining coincide at IPIC, North Miami Beach, located in the Intracoastal Mall right across from the Oleta River State Park. Elevate your movie-going experience with chef-driven cuisine and handmade cocktails at our North Miami Beach movie theater."

    )
  );
}

const Are67 = () => {
  return (
    AreTmp(
      meyeramphitheater,
      "Meyer Amphitheater",
      "This 10,000 square foot band shell hosts special events throughout the year, including 4th on Flagler festivities, Irish Fest, and regular concerts throughout the year There is lush, soft grass on which to sit and picnic, benches, tables, a walking path, bathrooms, and a tree-lined knoll from which to look into the park or out to the intracoastal."
    )
  );
}

const Are68 = () => {
  return (
    AreTmp(
      palmbeachinternationalairport,
      "Palm Beach International Airport",
      "Palm Beach International Airport is a public airport in Palm Beach County, Florida, located just west of the city of West Palm Beach, Florida, United States, which it serves as the primary airport for."

    )
  );
}

const Are69 = () => {
  return (
    AreTmp(
      thesquare,
      "The Square",
      "The Square  is an upscale lifestyle center in downtown West Palm Beach, Florida, along South Rosemary Avenue. Considered a New Urbanist mixed-use development, The Square is architecturally composed of Mediterranean and Venetian elements. The 600,000-square-foot (56,000 m2)-center contains more than 60 restaurants and stores, as well as rental apartments, condos, and offices."

    )
  );
}

const Are70 = () => {
  return (
    AreTmp(
      palmbeachisland,
      "Palm Beach Island",
      "Palm Beach is a town in South Florida, separated from the mainland by the Lake Worth Lagoon. It’s known for its glitzy estates and its beaches, including the long, sandy Palm Beach Municipal Beach. Worth Avenue is lined with upscale boutiques, galleries and restaurants."

    )
  );
}

const Are71 = () => {
  return (
    AreTmp(
      flaglermuseum,
      "Flagler Museum",
      "The Museum is pleased to offer a diverse series of visitor and member programs in addition to General Admission. In-person programs include live music performances, holiday-themed celebrations, and educational lectures. "

    )
  );
}

const Are72 = () => {
  return (
    AreTmp(
      worthavenue,
      "Worth Avenue",
      "Worth Avenue is a shopping and dining enclave that is internationally revered for its beauty, its history and its unparalleled legacy of fine customer service."

    )
  );
}

const Are73 = () => {
  return (
    AreTmp(
      greencomplexforsportsrecreation,
      "Green Complex for Sports & Recreation",
      "The Greene Complex for Sports and Recreation is PBA's health and fitness center, and offers a wealth of state-of-the-art fitness and training equipment."

    )
  );
}

const Are74 = () => {
  return (
    AreTmp(
      amccityplace20,
      "AMC CityPlace 20",
      "Experience the difference of AMC amenities. From spacious rocking seats to luxury recliners, innovative menus and premium offerings like IMAX, Dolby Cinema, and Prime at AMC, AMC Theatres offers a range of ways to get more out of movies."

    )
  );
}

const Are75 = () => {
  return (
    AreTmp(
      rapidswaterpark,
      "Rapids Water Park",
      "Rapids Water Park is a water park in Riviera Beach, Florida, USA, that occupies 30 acres near I-95. The park includes 42 slides and attractions, including a wave pool, dual seven-story speed slides, and a quarter-mile lazy river."

    )
  );
}

const Are76 = () => {
  return (
    AreTmp(
      manateelagoon,
      "Manatee Lagoon",
      "Manatee Lagoon is dedicated to educating the public about manatees and Lake Worth Lagoon, and inspiring communities to preserve and protect Florida's environment and wildlife for future generations."

    )
  );
}

const Are77 = () => {
  return (
    AreTmp(
      palmbeachzooconservationsociety,
      "Palm Beach Zoo & Conservation Society",
      "The Palm Beach Zoo & Conservation Society is a non-profit zoological organization located at Dreher Park in West Palm Beach. The zoo houses more than 550 animals, many of them endangered, within 23-acres of lush tropical habitat."

    )
  );
}

const Are78 = () => {
  return (
    AreTmp(
      johndmacarthurbeachstatepark,
      "John D MacArthur Beach State Park",
      "John D. MacArthur Beach State Park, named for John D. MacArthur whose Foundation donated a portion of the land for its construction in the 1970s, is located on and just north of Singer Island, Florida in North Palm Beach, Florida. "

    )
  );
}

const Are79 = () => {
  return (
    AreTmp(
      ballparkofthepalmbeaches,
      "Ballpark of the Palm Beaches",
      "The Ballpark of the Palm Beaches is a baseball park located in West Palm Beach, Florida. The stadium has a capacity of 6,500 people in fixed seats with room for 1,000 more on the outfield berm. The stadium hosts the Houston Astros and Washington Nationals Major League Baseball teams annually for spring training"

    )
  );
}

const Are80 = () => {
  return (
    AreTmp(
      thegardensmall,
      "The Gardens Mall",
      "The Gardens Mall is a two-story, enclosed shopping mall in Palm Beach Gardens, Florida. Its anchors are Macy's, Sears, Bloomingdale's, Nordstrom and Saks Fifth Avenue, and it features more than 160 specialty shops and restaurants."

    )
  );
}

const Are81 = () => {
  return (
    AreTmp(
      westpalmbeachinternationalairport,
      "West Palm Beach International Airport",
      "Palm Beach International Airport is a public airport in Palm Beach County, Florida, located just west of the city of West Palm Beach, Florida, United States, which it serves as the primary airport for."

    )
  );
}

const Are82 = () => {
  return (
    AreTmp(
      fortlauderdalehollywoodinternationalairport,
      "Fort Lauderdale-Hollywood International Airport",
      "Fort Lauderdale–Hollywood International Airport is a major public airport in Broward County, Florida, United States, and is one of three airports serving the Miami metropolitan area."

    )
  );
}

const Are83 = () => {
  return (
    AreTmp(
      hollywoodbeachgolfclub,
      "Hollywood Beach Golf Club",
      "The Hollywood Beach Country Club is a championship, par-70. golf course designed by renowned architect Donald Ross in 1924. Our fabulous facility offers a Superior Small Lodging award winning 31-room hotel, a full service restaurant and lounge, banquet facilities that can accommodate up to 200 persons, all of which afford panoramic views of our manicured golf course."

    )
  );
}

const Are84 = () => {
  return (
    AreTmp(
      hollywoodbeachbroadwalk,
      "Hollywood Beach Broadwalk",
      "This 2.5-mile pedestrian promenade is crowded with joggers, skaters and cyclists with seaside cafes perfect for sitting, resting and people-watching."

    )
  );
}

const Are85 = () => {
  return (
    AreTmp(
      youngcircleshoppingcenter,
      "Young Circle Shopping Center",
      "Young Circle Shopping Center, your favorite mix of shops and dining options in Hollywood. 100-1735 East Young Circle, Hollywood, FL 33020."

    )
  );
}


class AttractionsImage extends Component {
  render() {
    return (
      <div className="Section3NBACarousel-image">
        <MDBView hover>
          <img
            width="95%"
            src={this.props.nbaIMAGE}
            className="img-fluid"
            alt=""
          />
        </MDBView>
        <h1 className="text-center mt-5">{this.props.nbaNAME}</h1>
        <p className="text-center mt-4">{this.props.nbaDESCRIPTION}</p>
      </div>
    );
  }
}

export default class BlueNAC extends Component {
  render() {
    const settings = {
      dots: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 1500,
    };

    const {
      are1, are2, are3, are4, are5, are6, are7, are8, are9, are10,
      are11, are12, are13, are14, are15, are16, are17, are18, are19, are20,
      are21, are22, are23, are24, are25, are26, are27, are28, are29, are30,
      are31, are32, are33, are34, are35, are36, are37, are38, are39, are40,
      are41, are42, are43, are44, are45, are46, are47, are48, are49, are50,
      are51, are52, are53, are54, are55, are56, are57, are58, are59, are60,
      are61, are62, are63, are64, are65, are66, are67, are68, are69, are70,
      are71, are72, are73, are74, are75, are76, are77, are78, are79, are80,
      are81, are82, are83, are84, are85
    } = this.props

    return (
      <div className="Section3NBACarousel">
        <div className="absoluteDiv">
          <div className="absoluteDiv2">
            <h1>NEARBY ATTRACTIONS</h1>
          </div>
        </div>
        <Slider {...settings}>
          {are1 ? <Are1 /> : ''}
          {are2 ? <Are2 /> : ''}
          {are3 ? <Are3 /> : ''}
          {are4 ? <Are4 /> : ''}
          {are5 ? <Are5 /> : ''}
          {are6 ? <Are6 /> : ''}
          {are7 ? <Are7 /> : ''}
          {are8 ? <Are8 /> : ''}
          {are9 ? <Are9 /> : ''}
          {are10 ? <Are10 /> : ''}
          {are11 ? <Are11 /> : ''}
          {are12 ? <Are12 /> : ''}
          {are13 ? <Are13 /> : ''}
          {are14 ? <Are14 /> : ''}
          {are15 ? <Are15 /> : ''}
          {are16 ? <Are16 /> : ''}
          {are17 ? <Are17 /> : ''}
          {are18 ? <Are18 /> : ''}
          {are19 ? <Are19 /> : ''}
          {are20 ? <Are20 /> : ''}
          {are21 ? <Are21 /> : ''}
          {are22 ? <Are22 /> : ''}
          {are23 ? <Are23 /> : ''}
          {are24 ? <Are24 /> : ''}
          {are25 ? <Are25 /> : ''}
          {are26 ? <Are26 /> : ''}
          {are27 ? <Are27 /> : ''}
          {are28 ? <Are28 /> : ''}
          {are29 ? <Are29 /> : ''}
          {are30 ? <Are30 /> : ''}
          {are31 ? <Are31 /> : ''}
          {are32 ? <Are32 /> : ''}
          {are33 ? <Are33 /> : ''}
          {are34 ? <Are34 /> : ''}
          {are35 ? <Are35 /> : ''}
          {are36 ? <Are36 /> : ''}
          {are37 ? <Are37 /> : ''}
          {are38 ? <Are38 /> : ''}
          {are39 ? <Are39 /> : ''}
          {are40 ? <Are40 /> : ''}
          {are41 ? <Are41 /> : ''}
          {are42 ? <Are42 /> : ''}
          {are43 ? <Are43 /> : ''}
          {are44 ? <Are44 /> : ''}
          {are45 ? <Are45 /> : ''}
          {are46 ? <Are46 /> : ''}
          {are47 ? <Are47 /> : ''}
          {are48 ? <Are48 /> : ''}
          {are49 ? <Are49 /> : ''}
          {are50 ? <Are50 /> : ''}
          {are51 ? <Are51 /> : ''}
          {are52 ? <Are52 /> : ''}
          {are53 ? <Are53 /> : ''}
          {are54 ? <Are54 /> : ''}
          {are55 ? <Are55 /> : ''}
          {are56 ? <Are56 /> : ''}
          {are57 ? <Are57 /> : ''}
          {are58 ? <Are58 /> : ''}
          {are59 ? <Are59 /> : ''}
          {are60 ? <Are60 /> : ''}
          {are61 ? <Are61 /> : ''}
          {are62 ? <Are62 /> : ''}
          {are63 ? <Are63 /> : ''}
          {are64 ? <Are64 /> : ''}
          {are65 ? <Are65 /> : ''}
          {are66 ? <Are66 /> : ''}
          {are67 ? <Are67 /> : ''}
          {are68 ? <Are68 /> : ''}
          {are69 ? <Are69 /> : ''}
          {are70 ? <Are70 /> : ''}
          {are71 ? <Are71 /> : ''}
          {are72 ? <Are72 /> : ''}
          {are73 ? <Are73 /> : ''}
          {are74 ? <Are74 /> : ''}
          {are75 ? <Are75 /> : ''}
          {are76 ? <Are76 /> : ''}
          {are77 ? <Are77 /> : ''}
          {are78 ? <Are78 /> : ''}
          {are79 ? <Are79 /> : ''}
          {are80 ? <Are80 /> : ''}
          {are81 ? <Are81 /> : ''}
          {are82 ? <Are82 /> : ''}
          {are83 ? <Are83 /> : ''}
          {are84 ? <Are84 /> : ''}
          {are85 ? <Are85 /> : ''}
        </Slider>
        <Fade>
          <div className="text-center pt-5 nbabtn">
            <Link to="/collection">
              <MDBBtn color="unique" className="mt-5 ml-0 button-on-white">
                view all communities
              </MDBBtn>
            </Link>
          </div>
        </Fade>
      </div>
    );
  }
}
