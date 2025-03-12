/*Меню*/
const techMenus = new Array(); //Массив с объектами меню, если их будет несколько

class techMobileMenu {
	id               = techMenus.length; //id объекта меню
	elem             = {}; //Элемент у которого меняется класс
	swid             = ""; //id элемента переключателя меню
	toggleClass      = "menu-active"; //Название активного класса для элемента
	toggleElemClass  = "body"; //Элемент контейнер
	menuClass        = "push-menu"; //Элемент с меню
	menuSelect       = false;
	constructor( $switchId , $elem ) {
		this.swid = $switchId;
		this.elem = $elem;
		/*Запускаем инициализацию*/
		this.Init();
	}
	/*Переключаем состояние*/
	Toggle(){
		if( this.elem.classList.contains( this.toggleClass ) ){
			this.Close();
		}else{
			this.Open();
		}
	}
	Init(){
		/*Задаём id менюхи*/
		techMenus[ this.id ] = this;
		document.getElementById( this.swid ).setAttribute( 'data' , this.id );
		this.elem.setAttribute( 'data' , this.id );
		document.getElementsByClassName( this.toggleElemClass )[ 0 ].setAttribute( 'data' , this.id );
		document.getElementsByClassName( this.menuClass )[ 0 ].setAttribute( 'data' , this.id );
		/*Переключатель*/
		document.getElementById( this.swid ).onclick = function(){
			let swid = this.getAttribute( 'data' );
			techMenus[ swid ].Toggle();
			techMenus[ swid ].menuSelect = true;
		}
		/*Действие по телеу элемента*/
		document.getElementsByClassName( this.toggleElemClass )[ 0 ].onclick = function(){
			let swid = this.getAttribute( 'data' );
			techMenus[ swid ].Close();
			techMenus[ swid ].menuSelect = false;
		}
		document.getElementsByClassName( this.toggleElemClass )[ 0 ].onmousemove = function(){
			let swid = this.getAttribute( 'data' );
			techMenus[ swid ].menuSelect = false;
		}
		document.getElementsByClassName( this.toggleElemClass )[ 0 ].onmouseenter = function(){
			let swid = this.getAttribute( 'data' );
			techMenus[ swid ].menuSelect = false;
		}
		/*Закрытие при скроле*/
		window.onscroll = function(){
			for( let m in techMenus ){
				if( techMenus[ m ].menuSelect == false ){
					techMenus[ m ].Close();
				}
			}
		}
		/*Действия по менюхе*/
		document.getElementsByClassName( this.menuClass )[ 0 ].onclick = function(){
			let swid = this.getAttribute( 'data' );
			techMenus[ swid ].menuSelect = true;
		}
		document.getElementsByClassName( this.menuClass )[ 0 ].onmousemove = function(){
			let swid = this.getAttribute( 'data' );
			techMenus[ swid ].menuSelect = true;
		}
		document.getElementsByClassName( this.menuClass )[ 0 ].onmouseenter = function(){
			let swid = this.getAttribute( 'data' );
			techMenus[ swid ].menuSelect = true;
		}
	}
	/*Открыть элемент*/
	Open = function(){
		this.elem.classList.add( this.toggleClass );
	}
	/*Закрыть элемент*/
	Close = function(){
		this.elem.classList.remove( this.toggleClass );
	}
	
}