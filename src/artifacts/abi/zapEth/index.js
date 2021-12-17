module.exports = [{ 'inputs':[{ 'internalType':'address', 'name':'_weth', 'type':'address' }, { 'internalType':'address', 'name':'_router', 'type':'address' }, { 'internalType':'address', 'name':'_pair', 'type':'address' }, { 'internalType':'address', 'name':'_vader', 'type':'address' }, { 'internalType':'address', 'name':'_bond', 'type':'address' }], 'stateMutability':'nonpayable', 'type':'constructor' }, { 'anonymous':false, 'inputs':[{ 'indexed':false, 'internalType':'address', 'name':'newOwner', 'type':'address' }], 'name':'OwnerChanged', 'type':'event' }, { 'anonymous':false, 'inputs':[{ 'indexed':false, 'internalType':'address', 'name':'newOwner', 'type':'address' }], 'name':'OwnerNominated', 'type':'event' }, { 'anonymous':false, 'inputs':[{ 'indexed':false, 'internalType':'bool', 'name':'_paused', 'type':'bool' }], 'name':'Pause', 'type':'event' }, { 'inputs':[], 'name':'WETH', 'outputs':[{ 'internalType':'address', 'name':'', 'type':'address' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[], 'name':'acceptOwnership', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function' }, { 'inputs':[], 'name':'bond', 'outputs':[{ 'internalType':'contract IVaderBond', 'name':'', 'type':'address' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[{ 'internalType':'uint256', 'name':'reserveIn', 'type':'uint256' }, { 'internalType':'uint256', 'name':'userIn', 'type':'uint256' }], 'name':'calculateSwapInAmount', 'outputs':[{ 'internalType':'uint256', 'name':'', 'type':'uint256' }], 'stateMutability':'pure', 'type':'function' }, { 'inputs':[{ 'internalType':'address', 'name':'_owner', 'type':'address' }], 'name':'nominateNewOwner', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function' }, { 'inputs':[], 'name':'nominatedOwner', 'outputs':[{ 'internalType':'address', 'name':'', 'type':'address' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[], 'name':'owner', 'outputs':[{ 'internalType':'address', 'name':'', 'type':'address' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[], 'name':'pair', 'outputs':[{ 'internalType':'contract IUniswapV2Pair', 'name':'', 'type':'address' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[], 'name':'pause', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function' }, { 'inputs':[], 'name':'paused', 'outputs':[{ 'internalType':'bool', 'name':'', 'type':'bool' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[{ 'internalType':'address', 'name':'_token', 'type':'address' }], 'name':'recover', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function' }, { 'inputs':[], 'name':'router', 'outputs':[{ 'internalType':'contract IUniswapV2Router', 'name':'', 'type':'address' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[], 'name':'unpause', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function' }, { 'inputs':[], 'name':'vader', 'outputs':[{ 'internalType':'contract IERC20', 'name':'', 'type':'address' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[{ 'internalType':'uint256', 'name':'minPayout', 'type':'uint256' }], 'name':'zap', 'outputs':[], 'stateMutability':'payable', 'type':'function' }, { 'stateMutability':'payable', 'type':'receive' }]