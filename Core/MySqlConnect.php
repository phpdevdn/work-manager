<?php 
namespace Core;
use PDO;
class MySqlconnect{
	protected $config;
	protected $pdo;
    protected $query;
	public function __construct(){
		$this->setConfig();
		$this->open();
	}
    public function __destruct()
    {
        $this->close();
    }
    public function query($sql, array $params = [])
    {
        if (! empty($params)) {
            $db = $this->pdo->prepare($sql);
            $db->execute($params);
        }else{
            $db = $this->pdo->query($sql);
        }
        $db->setFetchMode(PDO::FETCH_OBJ);
        return $db;       
    }
    public function get($db){
        if($db === null){ return false;}        
        $result = $db->fetchAll();
        return $result;
    }
    public function create($db){
        if($db === null){ return false;}        
        $result = $this->pdo->lastInsertId();
        return $result;
    }                 
   	//	
	private function open(){
		$config = $this->config;
        $connnect = new PDO(
        	"mysql:dbname={$config['database']};host={$config['host']};port={$config['port']}",
            $config['user'],
            $config['password']
        );
        $connnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo = $connnect;
	}
	private function setConfig(){
		$config = include(CONFIG_PATH . '/database.php');
		$this->config = $config;
	}
    private final function close()
    {
        $this->pdo = null;
    }	
}