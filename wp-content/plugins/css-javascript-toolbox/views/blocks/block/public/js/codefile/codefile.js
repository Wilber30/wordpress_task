/**
* 
* 
* 
* 
*/

/**
* 
* 
* 
*/
(function($) {
	
	/**
	* put your comment there...
	* 
	* @param block
	*/
	CJTBlockFile = function(block) {
		
		/**
		* put your comment there...
		* 
		* @type Object
		*/
		this.file = {};
		
        /**
        * put your comment there...
        * 
        * @param event
        * @param block
        */
        var _onbeforedeleteblock = function(event, block) {
            
            if (block === CJTBlockCodeFileView.block) {
                
                CJTBlockCodeFileView.deattach();
            }
            
        };
        
		/**
		* put your comment there...
		* 
		* 
		*/
		var _onopencodefiledialog = function(event) {
            
			// Switch Code Files Managed to current block.
            CJTBlockCodeFileView.switchTo(block);
            
            block._onPaneledItems(event);
            
            return false;
		};
		
		/**
		*
		*
		*/
		this.deleteCodeFile = function(ids) {
			// Request data.
			var requestData = {blockId : block.block.get('id'), ids : ids};
			// Query server / return promise object to caller.
			return CJTBlocksPage.server.send('codeFiles', 'delete', requestData);
		};

		/**
		*
		*
		*
		*/
		this.getList = function() {
			// Request data.
			var requestData = {blockId :block.block.get('id')};
			// Query server / return promise object to caller.
			return CJTBlocksPage.server.send('codeFiles', 'getList', requestData);
		};

		this.ondeleteblock = function() {
			// Don't delete MENU if it being appended under current block.
			if (CJTBlockCodeFileView.block === block) {
				CJTBlockCodeFileView.deattach();
			}
		};
		/**
		* 
		*
		*
		*/
		this.save = function(data) {
			// Buold request params.
			var requestData = {blockId : block.block.get('id'), codeFile : data};
			// Send request.
			return CJTBlocksPage.server.send('codeFiles', 'save', requestData, 'post');
		};

		/**
		* 
		*
		*
		*/		
		this.switchFile = function(codeFile) {
			// INitialize.
			var model = block.block;
			var blockId = model.get('id');
			// Request data.
			var requestData = {blockId : blockId, codeFileId : codeFile.id};
			var promise = $.Deferred();
			// Query server / return promise object to caller.
			CJTBlocksPage.server.send('codeFiles', 'switch', requestData).done($.proxy(
				function(rCodeFile) {
					// Switch Code File.
					this.file.activeFileId = rCodeFile.id;
					this.file.name = rCodeFile.name;
					this.file.type = rCodeFile.type;
					
                    // CODE ADDED BY RBJ -- START
                    if (!rCodeFile.code) {
                        rCodeFile.code = '';
                    }
                    model.aceEditor.$blockScrolling = Infinity;
                    // CODE ADDED BY RBJ -- START

                    // Re-Initialize ACE Code Editor.
					model.aceEditor.getSession().setValue(rCodeFile.code);
					model.aceEditor.cjtSyncInputField();
					// Make sure to recalculate changes after force ace editor to be unchanged.
					var isChanged = CJTBlocksPage.blocks.calculateChanges(block.changes, model.aceEditor.cjtBlockFieldId, false);
					CJTBlocksPage.blockContentChanged(blockId, isChanged);
					block.editBlockActionsToolbox.buttons.save.enable(isChanged);
					// Reflect View State.
					promise.resolve(blockId, rCodeFile.id);
				}, this)
			);
			return promise;
		};
	
		// Get All input file elements.
		// sent from server, get the values.
		// remove them.
		var fileInputs = block.block.box.find("input[name^='cjtoolbox[" + block.block.get('id') + "][file]']");
		$.each(fileInputs, $.proxy(
			function(index, fileInput) {
				var propertyName = fileInput.name.match(/cjtoolbox\[\d+\]\[file\]\[(\w+)\]/)[1];
				this.file[propertyName] = fileInput.value;
			}, this)
		);
		// Remove all file inputs sent from server.
		fileInputs.remove();
		
		// Switch editor language.
        block._onswitcheditorlang({}, {lang : this.file.type ? this.file.type : block.block.get('editorLang', 'css')});		
        
        block.toolbox.buttons['code-files'].callback = _onopencodefiledialog;
        
        // Block Events
        block.block.box.on('BeforeDeleteBlock', _onbeforedeleteblock);
	};
	
})(jQuery);