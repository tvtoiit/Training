<?php
class Search {
    private $comn;
    private $table="mstcustomer";
    public $customerid;
    public $customerName;
    public $sex;
    public $birthday;
    public $email;
    public $address;
    public $deleteYmd;

    public function __construct($db) {
        $this->comn = $db;
    }

    public function deleteCustomer($customerIds) {
        if (empty($customerIds)) {
            echo "hong co customer de xoa";
            return false;
        }
    
        //Chuyển mảng id thành chuỗi
        $customerIdsString = implode(",", $customerIds);
    
        //query xoa khach hang
        $query = "DELETE FROM " .$this->table. " WHERE customer_id IN ($customerIdsString)";
    
        $stmt = $this->comn->prepare($query);
    
        //Thuc thi truy van
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function editCustomer() {
        //Bat dau 1 transaction
        $this->comn->beginTransaction();
        try {
            $query = "UPDATE ".$this->table." SET customername = :customerName, sex = :sex, birthday = :birthday, email = :email, address = :address, deleteYmd = :deleteymd WHERE customerid = :customerId";
            
            //Chuan bi cho cau truy van
            $stmt->$this->comn->prepare($query);

            //BindParam
            $stmt->bindParam(":customerName", $this->$customerName);
            $stmt->bindParam(":sex", $this->$sex);
            $stmt->bindParam(":birthday", $this->$birthday);
            $stmt->bindParam(":email", $this->$email);
            $stmt->bindParam(":address", $this->$address);
            $stmt->bindParam(":deleteymd", $this->$deleteYmd);
            $stmt->bindParam(":customerId", $this->$customerid);

            //Thuc hien truy van
            $stmt->execute();

            //commit transaction
            $this->comn->commit();
            
        } catch(PDOException $e) {
            $this->comn->rollBack();
            echo "Error: " .$e->getMessage();
            return false;
        }
    }

    public function searchCustomer() {
        
        $query = "SELECT * FROM $this->table";

        // Thực hiện truy vấn SQL và trả về kết quả
        $stmt = $this->comn->prepare($query);
        $stmt->execute();

        // Lấy dữ liệu từ kết quả truy vấn
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }
}


?>