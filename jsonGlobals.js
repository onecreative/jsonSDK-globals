module.exports = {
	id:'globals',
	_type:'file',
	_appID:'',
	builderPrefix:'',
	builderPath:'',
	utilitiesPath:'',
	appPath:'',
	jsonPath:'',
	uploadPath:'',
	tempPath:'',
	dataStoragePrefix:'',
	tempName:'',
	files: ['globals', 'schema', 'live', 'dataSources', 'paths', 'references', 'lineage', 'search'],
	fields: {
		id:'j08plcfe',
		_parent:'globals',
		_type:'folder',
		temp: [{
			id: 1,
			name:'parentID',
			type:'String'
		}, {
			id: 2,
			name:'schemaID',
			type:'String'
		}, {
			id: 3,
			name:'dataStorageRecordID',
			type:'String'
		}, {
			id: 4,
			name:'mode',
			type:'String'
		}],
		auto: {
			name: {
				values: {
					name:'name',
					label:'Name',
					dataStorage:'iyn6q8up',
					type:'iz4t4jwh',
					tableView:true,
					required:true,
					array:false,
					unique:true
				},
				force:{
					required:true,
					array:false,
					tableView:true
				},
				removable:false
			}
		},
		dataStorage: {
			id:'j8vz2s00',
			_parent:'globals',
			_type:'table',
			default:'iyn6q8up',
			items: [{
				id:'iyn6q8up',
				_parent:'j8vz2s00',
				_type:'record',
				name:'JSON',
				field: {
					typeDefault: 'iz4t4jwh',
					types: {
						iz4t4jwh: {map:'iz4t4jwh', force:{}},
						iz4t4k7c: {map:'iz4t4k7c', force:{}},
						iz4t4kgo: {map:'iz4t4kgo', force:{}},
						j0peu96z: {map:'j0peu96z', force:{array:false}},
						iz4t4kq4: {map:'iz4t4kq4', force:{array:false}},
						iz4t4l0a: {map:'iz4t4l0a', force:{array:false}},
						j81qhog7: {map:'j81qhog7', force:{array:false}},
						iz4t4lb8: {map:'iz4t4lb8', force:{array:false}},
						j95t2x40: {map:'j95t2x40', force:{}}
					},
					presets: {},
					allowCustom:true
				}
			}, {
				id:'iz4sxid1',
				_parent:'j8vz2s00',
				_type:'record',
				name:'Web App',
				type: 'iz4t4jwh',
				field: {
					types: {
						iz4t4jwh: {map:'String', force:{array:false}},
						iz4t4k7c: {map:'Number', force:{array:false}},
						iz4t4kgo: {map:'String', force:{array:false}},
						j0peu96z: {map:'String', force:{array:false}},
						iz4t4kq4: {map:'Boolean', force:{array:false}},
						iz4t4l0a: {map:'String_MultiLine', force:{array:false}},
						j81qhog7: {map:'String_MultiLine', force:{array:false}},
						iz4t4lb8: {map:'Image', force:{array:false}},
						j95t2x40: {map:'String', force:{array:false}}
					},
					presets: {
						weight: {type:'iz4t4k7c', required:false},
						releaseDate: {type:'iz4t4kgo', required:false},
						expiryDate: {type:'iz4t4kgo', required:false},
						createDate: {type:'iz4t4kgo', required:false},
						lastUpdateDate: {type:'iz4t4kgo', required:false},
						enabled: {type:'iz4t4kq4', required:false},
						slug: {type:'iz4t4jwh', required:false},
						description: {type:'iz4t4l0a', required:false},
						roleId: {type:'iz4t4k7c', required:false},
						createdBy: {type:'iz4t4k7c', required:false},
						submittedBy: {type:'iz4t4k7c', required:false},
						address: {type:'iz4t4jwh', required:false},
						city: {type:'iz4t4jwh', required:false},
						state: {type:'iz4t4jwh', required:false},
						zipCode: {type:'iz4t4jwh', required:false},
						country: {type:'iz4t4jwh', required:false}
					},
					allowCustom:true
				}
			}]
		},
		layout: {
			label: {
				label:'Label',
				default:'',
				input:'text',
				required:true,
				attr:'data-bcpie-sameas=\"copy:[name]; scope:form; scopeMode:closest; convert:title; event:change; breakonChange:true; eventNamespace:; copyOnLoad:false;\"'
			},
			tooltip: {
				label:'Tooltip',
				default:'',
				input:'text',
				required:false,
				attr:''
			},
			columns: {
				label:'Columns',
				default: 6,
				input:'select',
				required:true,
				attr:'',
				editable:false,
				options: [
					{text:'shrink', value:'shrink'}, 
					{text:'expand', value:'auto'}, 
					{text:'1', value: 1}, 
					{text:'1', value: 1}, 
					{text:'2', value: 2}, 
					{text:'3', value: 3}, 
					{text:'4', value: 4}, 
					{text:'5', value: 5}, 
					{text:'6', value: 6}, 
					{text:'7', value: 7}, 
					{text:'8', value: 8}, 
					{text:'9', value: 9}, 
					{text:'10', value: 10}, 
					{text:'11', value: 11}, 
					{text:'12', value: 12}
				]
			},
			tableView: {
				label:'table view',
				default:false,
				input:'boolean',
				required:false,
				attr:''
			}, 
			detailView: {
				label:'detail view',
				default:true,
				input:'boolean',
				required:false,
				attr:''
			}, 
			readonly: {
				label:'readonly',
				default:false,
				input:'boolean',
				required:false,
				attr:''
			}
		},
		validation: {
			required: {
				label:'required',
				default:false,
				input:'boolean',
				required:false,
				attr:''
			}, 
			unique: {
				label:'unique',
				default:false,
				input:'boolean',
				required:false,
				attr:''
			}
		},
		types: {
			id:'j8vz2s0u',
			_parent:'globals',
			_type:'table',
			items: [{
				id:'iz4t4jwh',
				_parent:'j8vz2s0u',
				_type:'record',
				name:'string',
				input:'text',
				inputs: {
					text: {
						attr:'',
						layout: {},
						validation: {},
						options: {
							array: {
								label:'array',
								default:false,
								input:'boolean',
								required:false,
								attr:''
							}
						}
					},
					slug: {
						attr:'data-bcpie-sameas=\"convert:slug; event:blur;\"',
						layout: {
							columns:4
						},
						validation: {},
						options: {
							array: {
								label:'array',
								default:false,
								input:'boolean',
								required:false,
								attr:''
							}
						}
					},
					color: {
						attr:'class=\"jscolor {hash:true}\"',
						layout: {
							columns:1
						},
						validation: {},
						options: {}
					}
				}
			}, {
				id:'iz4t4k7c',
				_parent:'j8vz2s0u',
				_type:'record',
				name:'number',
				input:'number',
				inputs: {
					number: {
						attr:'',
						layout: {
							columns:1
						},
						validation: {},
						options: {
							decimals: {
								label:'Decimals',
								default: 0,
								input:'number',
								min: 0,
								max: null,
								required:false,
								attr:''
							},
							min: {
								label:'Min',
								default: null,
								input:'number',
								min: null,
								max: null,
								required:false,
								attr:''
							},
							max: {
								label:'Max',
								default: null,
								input:'number',
								min: null,
								max: null,
								required:false,
								attr:''
							},
							step: {
								label:'step',
								default: null,
								input:'number',
								min: null,
								max: null,
								required:false,
								attr:''
							},
							array: {
								label:'array',
								default:false,
								input:'boolean',
								required:false,
								attr:''
							}
						}
					},
					range: {
						attr:'',
						layout: {
							columns:4
						},
						validation: {},
						options: {
							decimals: {
								label:'Decimals',
								default: 0,
								input:'number',
								min: 0,
								max: null,
								required:false,
								attr:''
							},
							min: {
								label:'Min',
								default: null,
								input:'number',
								min: null,
								max: null,
								required:false,
								attr:''
							},
							max: {
								label:'Max',
								default: null,
								input:'number',
								min: null,
								max: null,
								required:false,
								attr:''
							},
							step: {
								label:'step',
								default: null,
								input:'number',
								min: null,
								max: null,
								required:false,
								attr:''
							},
							ticks: {
								label:'tick marks',
								default:false,
								input:'boolean',
								required:false,
								attr:''
							},
							array: {
								label:'array',
								default:false,
								input:'boolean',
								required:false,
								attr:''
							}
						}
					}
				}
			}, {
				id:'iz4t4kgo',
				_parent:'j8vz2s0u',
				_type:'record',
				name:'dateTime',
				default:'widget',
				inputs: {
					widget: {
						attr:'',
						layout: {
							columns:2
						},
						validation: {},
						options: {
							format: {
								label:'Format',
								default:'utc',
								input:'select',
								required:true,
								attr:'',
								editable:true,
								options: [
									{text:'utc', value:'utc'}, 
									{text:'calendar', value:'calendar'}, 
									{text:'YYYY', value:'YYYY (ie., 2017)'}, 
									{text:'MM-DD-YYYY', value:'MM-DD-YYYY (ie., 10-21-2017)'}, 
									{text:'DD-MM-YYYY', value:'DD-MM-YYYY (ie., 21-10-2017)'}, 
									{text:'MMM DD, YYYY', value:'MMM DD, YYYY (ie., Oct 21, 2017)'}, 
									{text:'MMMM Do', value:'MMMM Do (ie., October 21st)'}, 
									{text:'hh:mm a', value:'hh:mm a (ie., 10:30 p.m.)'}, 
									{text:'HH:mm a', value:'hh:mm a (ie., 22:30 p.m.)'}, 
									{text:'HH:mm', value:'hh:mm a (ie., 22:30)'}, 
									{text:'HH:mm z', value:'hh:mm z (ie., 22:30 EST)'}, 
									{text:'MMM Do @ hh:mm a z', value:'hh:mm a (ie., Oct. 21st @ 10:30 p.m. EST)'}
								]
							},
							displayFormat: {
								label:'Display Format',
								default:'MM-DD-YYYY',
								input:'select',
								required:true,
								attr:'',
								editable:true,
								options: [
									{text:'utc', value:'utc'}, 
									{text:'calendar', value:'calendar'}, 
									{text:'YYYY', value:'YYYY (ie., 2017)'}, 
									{text:'MM-DD-YYYY', value:'MM-DD-YYYY (ie., 10-21-2017)'}, 
									{text:'DD-MM-YYYY', value:'DD-MM-YYYY (ie., 21-10-2017)'}, 
									{text:'MMM DD, YYYY', value:'MMM DD, YYYY (ie., Oct 21, 2017)'}, 
									{text:'MMMM Do', value:'MMMM Do (ie., October 21st)'}, 
									{text:'hh:mm a', value:'hh:mm a (ie., 10:30 p.m.)'}, 
									{text:'HH:mm a', value:'hh:mm a (ie., 22:30 p.m.)'}, 
									{text:'HH:mm', value:'hh:mm a (ie., 22:30)'}, 
									{text:'HH:mm z', value:'hh:mm z (ie., 22:30 EST)'}, 
									{text:'MMM Do @ hh:mm a z', value:'hh:mm a (ie., Oct. 21st @ 10:30 p.m. EST)'}
								]
							},
							enable: {
								label:'Enable',
								default: null,
								input:'string',
								required:false,
								attr:'data-bcpie-date=\"format:utc; displayFormat:MMM DD, YYYY @ HH:mm z; mode:multiple; widget:modal;\"'
							},
							disable: {
								label:'Disable',
								default: null,
								input:'string',
								required:false,
								attr:'data-bcpie-date=\"format:utc; displayFormat:MMM DD, YYYY @ HH:mm z; mode:multiple; widget:modal;\"'
							},
							min: {
								label:'Min',
								default: null,
								input:'string',
								required:false,
								attr:'data-bcpie-date=\"format:utc; displayFormat:MMM DD, YYYY @ HH:mm z; mode:single; widget:modal;\"'
							},
							max: {
								label:'Max',
								default: null,
								input:'string',
								required:false,
								attr:'data-bcpie-date=\"format:utc; displayFormat:MMM DD, YYYY @ HH:mm z; mode:single; widget:modal;\"'
							}
						}
					}
				}
			}, {
				id:'j0peu96z',
				_parent:'j8vz2s0u',
				_type:'record',
				name:'link',
				input:'url',
				inputs: {
					url: {
						attr:'',
						layout: {},
						validation: {},
						options: {
							clickable: {
								label:'clickable',
								default:true,
								input:'boolean',
								required:false,
								attr:''
							},
							array: {
								label:'array',
								default:false,
								input:'boolean',
								required:false,
								attr:''
							}
						}
					},
					email: {
						attr:'',
						layout: {},
						validation: {},
						options: {
							clickable: {
								label:'clickable',
								default:true,
								input:'boolean',
								required:false,
								attr:''
							},
							array: {
								label:'array',
								default:false,
								input:'boolean',
								required:false,
								attr:''
							}
						}
					},
					phone: {
						attr:'',
						layout: {},
						validation: {},
						options: {
							format: {
								label:'Format',
								default:'(xxx) xxx-xxxx',
								input:'select',
								required:true,
								attr:'',
								editable:true,
								options: [
									{text:'(xxx) xxx-xxxx', value:'(xxx) xxx-xxxx'}, 
									{text:'x (xxx) xxx-xxxx', value:'x (xxx) xxx-xxxx'}, 
									{text:'+x (xxx) xxx-xxxx', value:'+x (xxx) xxx-xxxx'}, 
									{text:'xxx-xxx-xxxx', value:'xxx-xxx-xxxx'}, 
									{text:'x xxx-xxx-xxxx', value:'x xxx-xxx-xxxx'}, 
									{text:'(x) xxx-xxx-xxxx', value:'(x) xxx-xxx-xxxx'}, 
									{text:'+x xxx-xxx-xxxx', value:'+x xxx-xxx-xxxx'}
								]
							},
							clickable: {
								label:'clickable',
								default:true,
								input:'boolean',
								required:false,
								attr:''
							},
							array: {
								label:'array',
								default:false,
								input:'boolean',
								required:false,
								attr:''
							}
						}
					}
				}
			}, {
				id:'iz4t4kq4',
				_parent:'j8vz2s0u',
				_type:'record',
				name:'boolean',
				input:'checkbox',
				inputs: {
					checkbox: {
						attr:'',
						layout: {
							columns:2
						},
						validation: {},
						options: {}
					},
					radio: {
						attr:'',
						layout: {
							columns:2
						},
						validation: {},
						options: {}
					},
					select: {
						attr:'',
						layout: {
							columns:2
						},
						validation: {},
						options: {}
					}
				}
			}, {
				id:'iz4t4l0a',
				_parent:'j8vz2s0u',
				_type:'record',
				name:'multiline',
				input:'textarea',
				inputs: {
					textarea: {
						attr:'',
						layout: {
							columns:2
						},
						validation: {},
						options: {}
					},
					wysiwyg: {
						attr:'',
						layout: {
							columns:2
						},
						validation: {},
						options: {
							buttons: {
								label:'Buttons',
								default:'basic',
								input:'select',
								required:true,
								attr:'',
								editable:false,
								options: [
									{text:'basic', value:'basic'}, 
									{text:'normal', value:'normal'}, 
									{text:'full', value:'full'}
								]
							}
						}
					}
				}
			}, {
				id:'j81qhog7',
				_parent:'j8vz2s0u',
				_type:'record',
				name:'embed',
				input:'video',
				inputs: {
					video: {
						attr:'',
						layout: {
							columns:3	
						},
						validation: {},
						options: {}
					},
					audio: {
						attr:'',
						layout: {
							columns: 3
						},
						validation: {},
						options: {}
					},
					img: {
						attr:'',
						layout: {
							columns: 3
						},
						validation: {},
						options: {}
					},
					document: {
						attr:'',
						layout: {
							columns:3
						},
						validation: {},
						options: {}
					}
				}
			}, {
				id:'iz4t4lb8',
				_parent:'j8vz2s0u',
				_type:'record',
				name:'file',
				input:'file',
				inputs: {
					file: {
						attr:'',
						layout: {
							columns:3
						},
						validation: {},
						options: {
							folder: {
								label:'Folder',
								default:'/images',
								input:'text',
								required:true,
								attr:''
							},
							delete: {
								label:'delete file when disconnected',
								default:false,
								input:'boolean',
								required:false,
								attr:''
							},
							uploads: {
								label:'allow uploads',
								default:true,
								input:'boolean',
								required:false,
								attr:''
							},
							existing: {
								label:'allow existing',
								default:false,
								input:'boolean',
								required:false,
								attr:''
							}
						}
					}
				}
			}, {
				id:'j95t2x40',
				_parent:'j8vz2s0u',
				_type:'record',
				name:'list',
				input:'select',
				inputs: {
					select: {
						attr:'',
						layout: {
							columns:3
						},
						validation: {},
						options: {
							source: {
								label:'Source',
								default:'app',
								input:'select',
								required:true,
								attr:'',
								editable:false,
								options: [
									{text:'App Table', value:'j6e1p48u'}, 
									{text:'Web App', value:'j6e1peah'}, 
									{text:'CRM', value:'j6e1pflq'}, 
									{text:'Ecommerce', value:'j6e1pfy6'}, 
									{text:'BC Pie', value:'j6e1pg9a'}
								]
							},
							list: {
								label:'List',
								default:'',
								input:'select',
								required:true,
								attr:'',
								editable:false,
								options: []
							},
							textPattern: {
								label:'Text Pattern',
								default:'{{name}}',
								input:'text',
								required:true,
								attr:''
							},
							valuePattern: {
								label:'Text Pattern',
								default:'{{id}}',
								input:'text',
								required:true,
								attr:'data-bcpie-listValue="true"'
							},
							reference: {
								label:'reference',
								default:false,
								input:'checkbox',
								required:false,
								attr:''
							},
							editable: {
								label:'editable',
								default:true,
								input:'boolean',
								required:false,
								attr:''
							},
							array: {
								label:'array',
								default:false,
								input:'boolean',
								required:false,
								attr:''
							}
						}
					},
					radio: {
						attr:'',
						layout: {
							columns:3
						},
						validation: {},
						options: {
							source: {
								label:'Source',
								default:'app',
								input:'select',
								required:true,
								attr:'',
								editable:false,
								options: [
									{text:'App Table', value:'j6e1p48u'}, 
									{text:'Web App', value:'j6e1peah'}, 
									{text:'CRM', value:'j6e1pflq'}, 
									{text:'Ecommerce', value:'j6e1pfy6'}, 
									{text:'BC Pie', value:'j6e1pg9a'}
								]
							},
							list: {
								label:'List',
								default:'',
								input:'select',
								required:true,
								attr:'data-bcpie-lists="source:[name=source];"',
								editable:false,
								options: []
							},
							textPattern: {
								label:'Text Pattern',
								default:'{{name}}',
								input:'text',
								required:true,
								attr:''
							},
							valuePattern: {
								label:'Text Pattern',
								default:'{{id}}',
								input:'text',
								required:true,
								attr:'data-bcpie-listValue="true"'
							},
							scrollAfter: {
								label:'Scroll After',
								default: 75,
								input:'number',
								required:false,
								attr:'',
								min: 20,
								max: null
							},
							reference: {
								label:'reference',
								default:false,
								input:'checkbox',
								required:false,
								attr:''
							}
						}
					},
					checkbox: {
						attr:'',
						layout: {
							columns:3
						},
						validation: {},
						options: {
							source: {
								label:'Source',
								default:'app',
								input:'select',
								required:true,
								attr:'',
								editable:false,
								options: [
									{text:'App Table', value:'j6e1p48u'}, 
									{text:'Web App', value:'j6e1peah'}, 
									{text:'CRM', value:'j6e1pflq'}, 
									{text:'Ecommerce', value:'j6e1pfy6'}, 
									{text:'BC Pie', value:'j6e1pg9a'}
								]
							},
							list: {
								label:'List',
								default:'',
								input:'select',
								required:true,
								attr:'',
								editable:false,
								options: []
							},
							textPattern: {
								label:'Text Pattern',
								default:'{{name}}',
								input:'text',
								required:true,
								attr:''
							},
							valuePattern: {
								label:'Text Pattern',
								default:'{{id}}',
								input:'text',
								required:true,
								attr:'data-bcpie-listValue="true"'
							},
							scrollAfter: {
								label:'Scroll After',
								default: 75,
								input:'number',
								required:false,
								attr:'',
								min: 20,
								max: null
							},
							reference: {
								label:'reference',
								default:false,
								input:'checkbox',
								required:false,
								attr:''
							},
							array: {
								label:'array',
								default:true,
								input:'boolean',
								required:true,
								attr:''
							}
						}
					}
				}
			}]
		}
	}
};