import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';

function Button(props) {
	return (
		<button onClick={props.onClick}>{props.title}</button>
	);
}

class Modal extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			title: 'HouseCanary Modal'
		};
	}
	
	renderModalButton() {
		return (
			<Button title="Open Modal" onClick={() => this.openModal()}>{this.state.title}</Button>
		);
	} 
	
	openModal() {
		this.setState({active: true});
	}
	
	closeModal() {
		this.setState({active: false});
	}
	
	render() {
		
		return (
			<div>
				{this.renderModalButton()}
				<div className={`hc-modal-container ${this.state.active ? 'active' : ''}`}>
					<div className="hc-modal">
						<img className="hc-modal-close" src="/assets/img/close.svg" onClick={() => this.closeModal()} alt="Close Modal" />
						<h1><img className="logo" src="/assets/img/hc.png" alt="HouseCanary Logo" /> {this.state.title}</h1>
						<div className="modal-content">
							<div className="image">
								<img src="https://picsum.photos/500/650" alt="Placeholder" />
							</div>
							<div className="description">
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem saepe eum eligendi voluptatibus voluptatum perferendis quae magnam animi cumque officiis doloribus sapiente voluptas reiciendis nulla repellat, maiores quis optio ut!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis corrupti beatae molestiae itaque ipsum tenetur quidem, explicabo quisquam eius quaerat eveniet quam aut minus sapiente harum distinctio earum eligendi!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ullam exercitationem debitis quidem temporibus quia similique maiores aliquam facere soluta recusandae neque perspiciatis tempora atque, optio officia. Quidem, quia nisi.</p>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque pariatur quis numquam ipsam nulla laborum laudantium eligendi eaque, non dignissimos quam illum molestias officia ea, obcaecati est vero soluta culpa!</p>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero exercitationem impedit aut accusantium porro repudiandae repellat assumenda magnam veritatis quo? Harum molestiae quasi ratione excepturi minima, est omnis at praesentium.</p>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, itaque. Illum doloribus facere, laborum dolor minima nihil earum quis consectetur aut, animi velit ex optio repellat aperiam ipsa saepe accusantium.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis corporis dolor nisi maiores! Sed perspiciatis beatae sint vel, pariatur dicta natus explicabo, aspernatur, est quibusdam velit! Officia, repellendus quos!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nobis dolor id voluptatem eum commodi voluptatum voluptate veritatis ad unde nam quo itaque, odit ullam nulla deleniti. Saepe, veniam nesciunt?</p>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex esse laudantium reprehenderit delectus repudiandae ad, animi porro voluptatum veniam, doloremque quis exercitationem expedita velit eius laborum ullam fugit perspiciatis reiciendis.</p>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur distinctio harum amet vero nemo, nostrum commodi dolores tempora quam cupiditate, omnis cumque. Aperiam soluta, non enim ad aut deleniti ratione.</p>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In mollitia odit assumenda impedit temporibus rerum corporis veniam voluptas a ratione, ducimus asperiores molestiae similique deleniti commodi aut doloribus rem cumque.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati magnam, omnis eligendi fugiat molestias corporis fuga temporibus dolorem pariatur, distinctio numquam velit assumenda odit dignissimos ea animi perferendis nam dolores?</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in quaerat sunt adipisci quisquam earum? Molestiae rerum ea, repellat incidunt assumenda consequuntur. Placeat accusamus debitis delectus dolores cumque. Reprehenderit, et!</p>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi porro corrupti facilis! Temporibus cum impedit placeat consequatur obcaecati ipsa, fugit debitis dolor maiores nulla harum molestias illo quidem deserunt esse?</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita natus fugit dolorum temporibus sint maiores quam? Incidunt perferendis maxime corporis hic magnam! Dicta itaque mollitia officia repudiandae minus quasi.</p>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quidem, libero ad explicabo rem sint. Explicabo recusandae, at nostrum animi numquam dignissimos voluptates non, corrupti, iure earum est fugit eos!</p>
								<Button title="I Passionately Accept This Lorem Agreement" onClick={() => this.closeModal()}></Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<React.StrictMode>
		<Modal />
	</React.StrictMode>,
	document.getElementById('root')
);