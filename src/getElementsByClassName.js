// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    // VAR result, array that holds the HTML elements
    var result =[];
    // HELPER FUNCTION that identifies CLASS (node)
        // RETURN boolean of node classname vs target classname
    // END HELPER
    var classMatch = function(node) {
        if (node.classList === undefined) {
            return false;
        }
        var nodeClasses = node.classList;

        for (var index in nodeClasses) {
            var nodeClass = nodeClasses[index];
            if (nodeClass === className) {
                return true;
            }
        }

        return false;
    }

    // HELPER Function that identifies NODES
        // IF Document body/node has matching classlist, add to results
        // END IF
        // IF Document body/node has childNodes
            // FOR every childNode, invoke helper function, passing in the childNode
            // END FOR
        // END IF
    //END HELPER
    var nodeFinder = function(node) {
        if (classMatch(node)) {
            result.push(node);
        }

        var children = node.childNodes;

        if (children) {
            // Calling the iteration index "index" instead of key because even though children is an object and not an array, it behaves like an array
            // in some regards, like the fact that the keys are stringifed indexes instead of names.
            for (var index in children) {
                var child = children[index];
                nodeFinder(child);
            }
        }
    }

    nodeFinder(document.body);

    console.log(result);
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
      console.log(expectedArray);

    return result;

};

// var example = getElementsByClassName("targetClassName");
