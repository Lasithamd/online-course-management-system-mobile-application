import React from "react";

export default function CourseCard(){
    return(
        <Card>
        <Card.Title 
          title="Card Title" 
          subtitle="Card Subtitle"  
          right={(props) => <Button onPress={() => loadVideo()}>View More</Button>} 
        />
      </Card>
    )
}