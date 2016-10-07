<?php
if(isset($_FILES['file'])) {
    $file = $_FILES['file'];
    
    // File Details
    $file_name = $file['name'];
    $file_tmp = $file['tmp_name'];
    $file_size = $file['size'];
    $file_error = $file["error"];
    
    // Work out file extension
    $file_ext = explode(".", "$file_name");
    $file_ext = strtolower(end($file_ext));
    
    $allowedFile = array("wav", "ogg", "mp3", "txt");
    
    if(in_array($file_ext, $allowed)) {
        if($file_error === 0) {
            if($file_size <= 854223) {
                
                $file_name_new = uniqid("", true) . "." . $file_ext;
            }
        }
    }
}
?>