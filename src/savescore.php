<?php 

if(isset($_REQUEST['n']) && isset($_REQUEST['s']) ){
    include 'connect.php';

    $postName = mysqli_real_escape_string($conn, $_REQUEST['n']);
    $score = $_REQUEST['s'];
    $playerID = 0;

    $sql = "SELECT id, `name` FROM `player` WHERE `name` = '$postName'";
    $result = $conn->query($sql);
    if($result->num_rows == 0){
        $sql = "INSERT INTO `player` (`name`, register_date) VALUES ('$postName', NOW())";
        if($conn->query($sql) === TRUE){
            // playeer is toegevoegd
            $playerID = $conn->insert_id;
        }
    } else {
        while($row = $result->fetch_assoc()) {
            $playerID = $row["id"];
        }
    }

    $sql = "INSERT INTO `high_score` (player_id, score, play_date) VALUES ($playerID, $score, NOW())";
    if($conn->query($sql) === true){

        // highscore top 10 ophalen
        $sql = "SELECT score,play_date,`name` FROM `high_score` 
            INNER JOIN `player` ON player.id = high_score.player_id
            ORDER BY score DESC LIMIT 10";
        $result = $conn->query($sql);
        $return_arr = array();

        while($row = mysqli_fetch_array($result)){

            $return_arr[] = array(  "score" => $row['score'],
                                    "play_date" => $row['play_date'],
                                    "name" => $row['name']);

        }
        echo json_encode($return_arr);
        http_response_code(200);
    } else {
        echo "Error: ". $sql;
        http_response_code(500);
    }

    $conn->close();
} else {
    http_response_code(400);
}


?>