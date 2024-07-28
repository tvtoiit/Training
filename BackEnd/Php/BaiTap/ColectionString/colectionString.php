<!-- bài 2: Viết chương trình kiểm tra 2 chuỗi có đảo chữ không? -->
<?php
    function areAnagram($str1, $str2) {
        $str1 = strtolower(str_replace(' ', '', $str1));
        $str2 = strtolower(str_replace(' ', '', $str2));

        if (strlen($str1) != strlen($str2)) {
            return false;
        }

        $array1 = str_split($str1);
        $array2 = str_split($str2);

        sort($array1);
        sort($array2);

        return $array1 = $array2;
    }

    $str1 = "abccdf";
    $str2 = "cdfabc";
    if (areAnagram($str1, $str2)) {
        echo "dao chu";
    } else {
        echo "kh dao chu";
    }
?>